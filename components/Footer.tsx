import React from 'react';

interface FooterProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onHomeClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick, onHomeClick }) => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold tracking-tighter mb-8 cursor-pointer inline-block" onClick={onHomeClick}>
          AI CREATOR <span className="text-yellow-500">JAPAN SCHOOL</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">会社概要</a>
          <button onClick={onPrivacyClick} className="hover:text-white transition-colors">プライバシーポリシー</button>
          <button onClick={onTermsClick} className="hover:text-white transition-colors">利用規約</button>
        </div>
        <p className="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} AI CREATOR JAPAN SCHOOL. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;