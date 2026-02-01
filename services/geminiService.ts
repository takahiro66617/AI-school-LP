import { GoogleGenAI } from "@google/genai";
import { COURSE_ITEMS, NEWS_ITEMS } from '../constants';

const API_KEY = process.env.API_KEY || '';

// Initialize the client
// Note: In a real app, ensure API_KEY is present.
const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Admissions Counselor for "AI CREATOR JAPAN SCHOOL" (a modern school specializing in AI x Creativity).
Your goal is to answer visitor questions encouragingly and professionally about our AI-focused curriculum.

CONTEXT:
This school focuses on "Life Shift" through AI skills (AI x SNS Marketing, AI x Web Design, Generative AI Video).
We teach how to use tools like ChatGPT, Midjourney, Runway, etc., to maximize creative output and efficiency.
We offer 1-on-1 mentorship by professional creators who use AI in their work.
We support both online and offline (Shibuya/Ochanomizu) learning.

COURSES:
${COURSE_ITEMS.map(c => `- ${c.title} (${c.titleEn}): ${c.description}`).join('\n')}

TONE:
Enthusiastic, professional, forward-thinking, supportive. Use Japanese primarily.
Emphasize that AI is a tool to empower creativity, not replace it.
If asked about prices, say "Tuition varies by course and duration. Please attend a free briefing session for a personalized quote."
Always encourage the user to book a "Free Briefing" (無料説明会).
`;

export const sendMessageToGemini = async (history: {role: 'user' | 'model', text: string}[], message: string): Promise<string> => {
  if (!API_KEY) {
    return "API Key is missing. Please configure the application.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "申し訳ありません、現在応答できません。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "エラーが発生しました。もう一度お試しください。";
  }
};

export const generateImage = async (prompt: string): Promise<string | null> => {
  if (!API_KEY) {
    console.warn("API Key is missing for image generation.");
    return null;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      // nano banana models do not support responseMimeType or tools for images
    });

    // Iterate through parts to find the image
    if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            }
        }
    }
  } catch (error) {
    console.error("Gemini Image Generation Error:", error);
  }
  return null;
};