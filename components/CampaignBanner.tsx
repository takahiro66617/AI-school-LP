import React from 'react';

const CampaignBanner: React.FC = () => {
  return (
    <section className="w-full bg-white py-8 md:py-12 border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Container Box */}
        <div className="border-[3px] md:border-4 border-[#FF3B00] rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 bg-white shadow-xl max-w-6xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
          
          {/* Left Text Side */}
          <div className="text-center lg:text-left flex-1">
            <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 md:mb-4 tracking-wide">
              今なら、受講料が
            </h3>
            <div className="relative inline-block mb-4 md:mb-6">
                <div className="flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-4 leading-tight">
                    <span className="font-black text-5xl md:text-7xl text-[#FF3B00] tracking-tighter drop-shadow-sm font-roboto">10%OFF</span>
                    <span className="text-2xl md:text-4xl font-bold text-gray-900">になるチャンス！？</span>
                </div>
                {/* Underline decoration */}
                <div className="absolute bottom-1 md:bottom-2 left-0 w-full h-[3px] md:h-[6px] bg-[#FF3B00] opacity-20 rounded-full"></div>
            </div>
             {/* Subtext */}
            <p className="text-sm md:text-base font-bold text-gray-600">
              さらに！卒業後に運営会社からお仕事発注のチャンスも
            </p>
          </div>

          {/* Right Buttons Side */}
          <div className="flex flex-col gap-3 md:gap-4 w-full lg:w-auto min-w-[280px] md:min-w-[340px]">
            {/* Button 1: Consultation */}
            <a 
              href="https://www.jicoo.com/event_types/PmiNz6wADCwl"
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-[#5A95E2] hover:bg-[#4A85D2] text-white font-bold text-center py-4 rounded-lg shadow-md transition-all hover:translate-y-[-2px] text-base md:text-lg tracking-wide"
            >
              無料個別相談を予約する
            </a>
            
            {/* Button 2: LINE */}
            <a 
              href="#" 
              className="block w-full bg-[#06C755] hover:bg-[#05B34C] text-white font-bold text-center py-4 rounded-lg shadow-md transition-all hover:translate-y-[-2px] text-base md:text-lg flex items-center justify-center gap-2 tracking-wide"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2.5C6.5 2.5 2 6.6 2 11.6c0 2.6 1.2 4.9 3.4 6.6-.2.8-1 2.8-1.2 3.2 0 0-.2.4.2.5.3.1.8 0 3-1.5l.2-.1c1.3.4 2.8.6 4.3.6 5.5 0 10-4.1 10-9.1S17.5 2.5 12 2.5z"/>
              </svg>
              LINEで5大特典を受け取る
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CampaignBanner;