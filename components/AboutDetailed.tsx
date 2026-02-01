import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionId } from '../types';

const AboutDetailed: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 md:py-32 bg-[#F7F7F7]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side: Text Content */}
          <div className="flex-1 w-full">
            {/* Header - Logo and "とは？" */}
            <div className="flex items-center gap-6 mb-12">
              <div className="bg-white border border-gray-100 px-6 py-3 rounded-xl shadow-md flex-shrink-0">
                <img 
                   src="https://lh3.googleusercontent.com/d/1Zs2I4g3PvmlctIr-zw8tUB67qf7nMgAI" 
                   alt="Logo" 
                   className="h-10 md:h-14 object-contain"
                   referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-800 tracking-tighter">
                とは？
              </h2>
            </div>

            {/* Main Catchphrase */}
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-black text-gray-800 leading-[1.4] md:leading-[1.4] tracking-tight">
                <span className="text-[#FF3B00] block whitespace-nowrap mb-2">Webデザイン・SNSマーケティング</span>
                <span className="block mb-2">AIを掛け合わせ、最速で成果を出す</span>
                <span className="block">実践型の養成スクールです。</span>
              </h3>
            </div>

            {/* Detailed Description */}
            <div className="space-y-6 text-gray-700 font-bold leading-relaxed max-w-2xl text-base md:text-lg lg:text-xl">
              <p className="md:break-keep">
                「ただのデザイン」「ただの投稿」の時代は終わりました。<br className="hidden md:block"/>
                最新のAI技術をWebデザインとSNSマーケティングの現場に完全統合。<span className="inline-block">制作工程を劇的に効率化し、</span><span className="inline-block">データに基づいた「売れるクリエイティブ」を</span><span className="inline-block">短期間で生み出すスキルを習得します。</span>
              </p>
              <p className="md:break-keep">
                <span className="inline-block">WebデザイナーとしてAIで表現の幅を広げ、</span><span className="inline-block">SNSマーケターとしてAIで分析と運用を自動化する。</span><span className="inline-block">これからの市場で最も求められる、</span><span className="inline-block">AIを自由自在に操るハイブリッドなクリエイターを</span><span className="inline-block">目指します。</span>
              </p>
            </div>
          </div>

          {/* Right Side: Visual Venn Diagram - FIXED OVERLAP & SIZE */}
          <div className="flex-1 w-full max-w-2xl mx-auto lg:mx-0">
            <div className="relative flex flex-col items-center">
              
              {/* Venn Diagram Container - Slightly wider aspect ratio to help separate text */}
              <div className="relative w-full aspect-[1.7/1] mb-12">
                
                {/* 1. Circles Layer (Background) */}
                <div className="absolute inset-0 z-0">
                  {/* Left Circle (Red/Orange) */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[58%] aspect-square bg-[#FF3B00] rounded-full shadow-lg mix-blend-multiply"></div>
                  {/* Right Circle (Yellow/Amber) */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[58%] aspect-square bg-[#FFB100] rounded-full shadow-lg mix-blend-multiply"></div>
                </div>

                {/* 2. Text Layer (Foreground) */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  
                  {/* Left Text Container 
                      - Added pr-8/12 to push text away from center collision
                      - Reduced font size slightly to fit
                  */}
                  <div className="absolute left-0 top-0 w-[58%] h-full flex items-center justify-center p-2 pr-6 md:pr-12">
                    <p className="text-white font-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center drop-shadow-md whitespace-nowrap md:whitespace-normal">
                      最新AI活用による<br/>
                      <span className="inline-block">圧倒的な制作スピード</span><br/>
                      <span className="inline-block">とクオリティ</span>
                    </p>
                  </div>

                  {/* Right Text Container 
                      - Added pl-8/12 to push text away from center collision
                      - Reduced font size slightly to fit
                  */}
                  <div className="absolute right-0 top-0 w-[58%] h-full flex items-center justify-center p-2 pl-6 md:pl-12">
                    <p className="text-white font-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center drop-shadow-md whitespace-nowrap md:whitespace-normal">
                      <span className="inline-block">Webデザイン &</span><br/>
                      <span className="inline-block">SNSマーケティングの</span><br/>
                      <span className="inline-block">実践的専門スキル</span>
                    </p>
                  </div>

                </div>

              </div>

              {/* Arrow Down */}
              <div className="mb-10">
                <ChevronDown className="text-[#FF3B00] animate-bounce w-12 h-12 md:w-16 md:h-16" strokeWidth={5} />
              </div>

              {/* Final Message with Highlight */}
              <div className="text-center relative px-4 w-full">
                <div className="absolute -inset-x-4 inset-y-0 z-0 pointer-events-none opacity-40 translate-y-3">
                  <svg viewBox="0 0 400 60" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M10,45 Q150,55 390,40 Q250,30 10,45" fill="#FFF9C4" />
                    <path d="M20,55 Q180,60 380,50 Q280,45 20,55" fill="#FFF9C4" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <p className="text-[#E65505] font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed">
                    <span className="inline-block">Webデザイナー × SNSマーケター</span><br/>
                    <span className="inline-block">AIを武器にした「選ばれる」存在へ</span><br/>
                    <span className="text-[#FF3B00] inline-block mt-2 border-b-4 border-[#FF3B00]">実務直結型の次世代キャリア</span>
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutDetailed;