import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'こんにちは！AI CREATOR JAPAN SCHOOLのAIカウンセラーです。コース内容や入学について、お気軽にご質問ください。' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: inputText };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Pass the updated history including the new user message
      const history = [...messages, userMessage];
      const responseText = await sendMessageToGemini(history, inputText);
      
      const botMessage: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', text: '申し訳ありません、エラーが発生しました。' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-gray-800 rotate-90' : 'bg-yellow-500 hover:bg-yellow-400 hover:scale-110'
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? <X color="white" size={24} /> : <MessageCircle color="black" size={28} strokeWidth={2.5} />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden transition-all duration-300 transform origin-bottom-right flex flex-col border border-gray-100 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-gray-900 p-4 flex items-center gap-3">
          <div className="bg-yellow-500 p-1.5 rounded-full">
            <Bot size={20} className="text-black" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">AI Admissions Counselor</h3>
            <p className="text-gray-400 text-xs">Powered by Gemini</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === 'user' ? 'bg-gray-300' : 'bg-yellow-100'
              }`}>
                {msg.role === 'user' ? <User size={16} className="text-gray-600" /> : <Bot size={16} className="text-yellow-600" />}
              </div>
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-gray-800 text-white rounded-tr-none'
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-2">
               <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <Bot size={16} className="text-yellow-600" />
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="質問を入力してください..."
              className="w-full pl-4 pr-12 py-3 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-white transition-all"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !inputText.trim()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;