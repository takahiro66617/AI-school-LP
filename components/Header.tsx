import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isSimple?: boolean;
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSimple = false, onLogoClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (onLogoClick) {
      e.preventDefault();
      onLogoClick();
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-sm h-16 md:h-20`}>
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo */}
        <a href="#" onClick={handleLogoClick} className="flex items-center h-full py-2 cursor-pointer">
           {!logoError ? (
             <img 
               src="https://lh3.googleusercontent.com/d/1Zs2I4g3PvmlctIr-zw8tUB67qf7nMgAI" 
               alt="AI CREATOR JAPAN SCHOOL" 
               className="h-full w-auto object-contain max-h-14 md:max-h-16"
               referrerPolicy="no-referrer"
               onError={() => setLogoError(true)}
             />
           ) : (
             <div className="flex flex-col leading-none text-gray-900 group">
                <span className="text-xs font-bold tracking-widest text-gray-500 group-hover:text-[#FF3B00] transition-colors">AI CREATOR JAPAN</span>
                <span className="text-xl md:text-2xl font-black tracking-tighter">SCHOOL<span className="text-[#FF3B00]">.</span></span>
             </div>
           )}
        </a>

        {/* Desktop Nav - Only show if not simple mode */}
        {!isSimple && (
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex space-x-6 mr-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-bold text-gray-600 hover:text-[#FF3B00] transition-colors relative py-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center gap-3">
              <a 
                href="https://www.jicoo.com/event_types/PmiNz6wADCwl"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-bold text-[#FF3B00] border-2 border-[#FF3B00] bg-white hover:bg-orange-50 transition-colors"
              >
                個別相談を予約
              </a>
              <a 
                href="#" 
                className="px-4 py-2 text-sm font-bold text-white bg-[#FF3B00] hover:bg-[#d93400] transition-colors shadow-md"
              >
                LINEで特典を受け取る
              </a>
            </div>
          </div>
        )}

        {/* Mobile Menu Button - Only show if not simple mode */}
        {!isSimple && (
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}
        
        {/* Simple Mode Button (Optional: Back button equivalent if desired, currently relying on Logo) */}
        {isSimple && (
             <button 
                onClick={onLogoClick}
                className="md:hidden text-sm font-bold text-[#FF3B00]"
              >
                TOPへ戻る
              </button>
        )}
      </div>

      {/* Mobile Nav Overlay */}
      {!isSimple && isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden border-t border-gray-100 h-[calc(100vh-64px)] overflow-y-auto">
          <ul className="flex flex-col p-6 gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block text-lg font-bold text-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  <span className="block w-full h-px bg-gray-100 mt-2"></span>
                </a>
              </li>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <a 
                href="https://www.jicoo.com/event_types/PmiNz6wADCwl"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 text-center font-bold text-[#FF3B00] border-2 border-[#FF3B00] bg-white rounded-md"
              >
                個別相談を予約
              </a>
              <a 
                href="#" 
                className="block w-full py-3 text-center font-bold text-white bg-[#FF3B00] rounded-md shadow-lg"
              >
                LINEで特典を受け取る
              </a>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;