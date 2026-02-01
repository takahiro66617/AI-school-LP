import React from 'react';

const Target: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
           {/* Logo Badge */}
           <div className="relative inline-flex items-center justify-center gap-5 bg-[#FF3B00] text-white px-12 py-5 md:px-16 md:py-6 rounded-[2rem] shadow-xl mb-12 transform hover:scale-105 transition-transform duration-300">
              <img 
                 src="https://lh3.googleusercontent.com/d/1Zs2I4g3PvmlctIr-zw8tUB67qf7nMgAI" 
                 alt="Logo" 
                 className="h-10 md:h-14 bg-white rounded-xl px-3 py-1.5 object-contain"
                 referrerPolicy="no-referrer"
              />
              <span className="font-black text-3xl md:text-5xl tracking-wider">なら</span>
              {/* Triangle tail for the main badge stays as it's part of the brand logo style in the reference */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[24px] border-t-[#FF3B00]"></div>
           </div>

           <h2 className="text-3xl md:text-5xl font-black text-gray-800 leading-tight tracking-tight mt-4">
             こんな<span className="text-[#FF3B00]">AIクリエイター</span>を<br className="md:hidden"/>目指せます！
           </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
           {/* Item 1 */}
           <TargetItem 
             highlight="0から"
             textAfter="AIを活用して、最短でWEBデザイナーとして仕事がもらえるように！"
           />
           {/* Item 2 */}
           <TargetItem 
             text="AI×マーケティング知識があるため広告会社も含め、"
             highlight="様々な現場"
             textAfter="で次世代デザイナーとして活躍！"
           />
           {/* Item 3 */}
           <TargetItem 
             text="最新AIツールも使いこなして、デザイナーとして"
             highlight="高単価案件を獲得"
             textAfter="できるプロフェッショナルへ！"
           />
        </div>

      </div>
    </section>
  );
};

interface TargetItemProps {
  highlight?: string;
  text?: string;
  textAfter?: string;
}

const TargetItem: React.FC<TargetItemProps> = ({ highlight, text, textAfter }) => {
  return (
    <div className="flex flex-col items-center group w-full">
       {/* Card - Changed from speech bubble to rounded rectangle by removing the triangle tail */}
       <div className="bg-white p-8 md:p-10 rounded-3xl relative w-full flex items-center justify-center shadow-lg transition-all duration-300 min-h-[180px] md:min-h-[200px] border-2 border-[#FF3B00]">
          <p className="font-bold text-gray-800 leading-relaxed text-center text-lg md:text-xl">
             {text && <span>{text}</span>}
             {highlight && (
               <span className="text-[#FF3B00] text-xl md:text-2xl mx-1 border-b-2 border-[#FF3B00]/30 inline-block">
                 {highlight}
               </span>
             )}
             {textAfter && <span>{textAfter}</span>}
          </p>
       </div>
    </div>
  )
}

export default Target;