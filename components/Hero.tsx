import React from 'react';
import { SectionId } from '../types';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.TOP} className="relative pt-24 pb-12 md:pt-32 md:pb-24 bg-[#FF3B00] overflow-hidden text-white min-h-[600px] md:min-h-[800px] flex items-center">
      
      {/* ================= BACKGROUND LAYERS ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-[#FF3B00]">
         <div className="absolute inset-[-50%] w-[200%] h-[200%] bg-grid-pattern animate-grid-scroll"></div>
      </div>

      <style>{`
        /* --- Grid Pattern --- */
        .bg-grid-pattern {
          background-size: 80px 80px;
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.35) 1px, transparent 1px);
        }

        @keyframes grid-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-80px, -80px, 0); }
        }
        
        .animate-grid-scroll {
          animation: grid-scroll 30s linear infinite;
          will-change: transform;
        }

        @keyframes reveal-swipe {
          0% {
            clip-path: inset(0 100% 0 0);
            transform: translateX(-5%);
          }
          100% {
            clip-path: inset(0 0 0 0);
            transform: translateX(0);
          }
        }
        
        .animate-reveal {
          clip-path: inset(0 100% 0 0);
          animation: reveal-swipe 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: clip-path, transform;
        }
      `}</style>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container mx-auto px-4 relative z-10 w-full h-full flex flex-col justify-center">
        
        {/* Top Collaboration Banner Area */}
        <div className="flex items-center justify-start gap-2 md:gap-4 mb-4 mt-10 md:mt-20 w-full overflow-hidden">
           <div className="flex items-center gap-2 shrink-0 flex-nowrap">
              <div className="bg-black text-white px-3 py-1 font-black italic tracking-tighter text-base md:text-xl border border-white/40 whitespace-nowrap">
                AI CREATOR JAPAN <span className="text-[#FF3B00]">SCHOOL</span>
              </div>
           </div>
           <p className="font-bold text-white text-base md:text-xl whitespace-nowrap shrink-0">だから最先端！</p>
        </div>

        <div className="flex flex-col items-start w-full">
          
          {/* Main Content Area */}
          <div className="w-full relative z-10 pt-2 flex flex-col items-start">
            
            {/* Slanted Text Container */}
            <div className="relative mb-14 mt-6 md:mt-12 py-4 md:py-8 pl-0 w-full">
                <div className="transform -rotate-[6deg] skew-x-[-6deg] origin-bottom-left text-left mix-blend-normal">
                    <h1 className="font-black tracking-tighter relative md:flex md:flex-col md:items-start md:gap-6">
                        
                        {/* =========================================
                            MOBILE LAYOUT (md:hidden)
                            - Line 1: AIスキルを武器にして (1行)
                            - Line 2: 圧倒的な (1行, 折り返し防止, text-6xl, py-1)
                            - Line 3: 成果を実現！ (1行, 折り返し防止, text-6xl, py-1)
                           ========================================= */}
                        <div className="flex md:hidden flex-col items-start gap-2">
                            {/* Line 1 */}
                            <span className="block w-fit bg-white text-[#FF3B00] px-4 py-2 text-2xl sm:text-3xl shadow-lg animate-reveal leading-snug whitespace-nowrap" style={{ animationDelay: '0.1s' }}>
                                AIスキルを武器にして
                            </span>
                            
                             {/* Line 2 */}
                            <span className="block w-fit bg-white text-[#FF3B00] px-4 py-1 text-6xl shadow-lg animate-reveal leading-snug mt-2 whitespace-nowrap" style={{ animationDelay: '0.3s' }}>
                                圧倒的な
                            </span>
                            
                             {/* Line 3 */}
                            <span className="block w-fit bg-white text-[#FF3B00] px-4 py-1 text-6xl shadow-lg animate-reveal leading-snug whitespace-nowrap" style={{ animationDelay: '0.4s' }}>
                                成果を実現！
                            </span>
                        </div>

                        {/* =========================================
                            DESKTOP LAYOUT (hidden md:block)
                           ========================================= */}
                        
                        {/* Top Line (PC) */}
                        <span className="hidden md:block w-fit bg-white text-[#FF3B00] px-10 py-2 md:text-6xl mb-1 relative z-10 shadow-lg animate-reveal leading-snug" style={{ animationDelay: '0.2s' }}>
                            AIスキルを武器にして
                        </span>
                        
                        {/* Bottom Line (PC) */}
                        <span className="hidden md:block w-fit bg-white text-[#FF3B00] px-12 py-4 md:text-8xl leading-snug relative z-10 shadow-lg animate-reveal" style={{ animationDelay: '0.4s' }}>
                            圧倒的な成果を実現！
                        </span>

                    </h1>
                </div>
            </div>

            <h2 className="text-sm md:text-xl font-bold text-white mb-8 border-l-4 border-white pl-4 drop-shadow-md bg-black/20 pr-4 py-2 md:py-3 inline-block">
              【AI×SNSマーケティング / AI×Webデザイン専攻】
            </h2>

            {/* CTA Button */}
            <a 
              href="https://www.jicoo.com/event_types/PmiNz6wADCwl"
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-white text-[#FF3B00] font-black text-lg md:text-2xl py-4 px-8 md:px-12 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>無料個別相談を予約する</span>
              <span className="bg-[#FF3B00] text-white rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <ChevronRight size={20} strokeWidth={3} />
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;