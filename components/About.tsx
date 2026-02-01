import React from 'react';
import { SectionId } from '../types';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <span className="text-[#E65505] font-bold tracking-widest text-sm uppercase block mb-2">FEATURES</span>
           <h2 className="text-3xl md:text-4xl font-black text-gray-900">
             AI時代に選ばれる<br/>
             <span className="text-[#E65505]">3つの学習メリット</span>
           </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Feature 1 */}
          <div className="bg-gray-50 p-8 hover:-translate-y-2 transition-transform duration-300 border-b-4 border-transparent hover:border-[#E65505]">
            <div className="text-[#E65505] font-black text-5xl opacity-20 mb-4">01</div>
            <h3 className="text-xl font-bold mb-4">AIネイティブな<br/>最新カリキュラム</h3>
            <p className="text-gray-600 text-sm leading-7">
              ChatGPT、Midjourney、Runwayなど、実務で必須の最新AIツールの使いこなしを前提としたカリキュラム。従来の手法の10倍の生産性を目指します。
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 p-8 hover:-translate-y-2 transition-transform duration-300 border-b-4 border-transparent hover:border-[#E65505]">
            <div className="text-[#E65505] font-black text-5xl opacity-20 mb-4">02</div>
            <h3 className="text-xl font-bold mb-4">現役AIクリエイターによる<br/>実践的指導</h3>
            <p className="text-gray-600 text-sm leading-7">
              AIを活用して現場で活躍しているプロが講師。プロンプトエンジニアリングから著作権への配慮まで、現場レベルのノウハウを直接指導します。
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 p-8 hover:-translate-y-2 transition-transform duration-300 border-b-4 border-transparent hover:border-[#E65505]">
            <div className="text-[#E65505] font-black text-5xl opacity-20 mb-4">03</div>
            <h3 className="text-xl font-bold mb-4">AI人材としての<br/>圧倒的な市場価値</h3>
            <p className="text-gray-600 text-sm leading-7">
              「AIが使える」だけではなく、「AIで成果を出せる」人材へ。需要が急増しているAI×マーケティング、AI×デザインの領域でキャリア支援を行います。
            </p>
          </div>
        </div>

        {/* Message */}
        <div className="mt-20 md:mt-32 bg-gray-900 text-white p-10 md:p-20 relative overflow-hidden">
           <div className="relative z-10 text-center max-w-2xl mx-auto">
             <h3 className="text-2xl md:text-3xl font-bold mb-6">
               AIと共に、創造性は加速する。
             </h3>
             <p className="text-gray-400 leading-8 mb-10">
               AIは仕事を奪うものではなく、あなたの可能性を広げる最強のパートナーです。<br/>
               未経験からでも、最新のテクノロジーを味方につければ、<br/>
               短期間でプロフェッショナルなクリエイターへと進化できます。
             </p>
             <a href="#" className="inline-block border border-white px-10 py-3 text-sm font-bold hover:bg-white hover:text-black transition-colors">
               コンセプト詳細を見る
             </a>
           </div>
           {/* Decor */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#E65505] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default About;