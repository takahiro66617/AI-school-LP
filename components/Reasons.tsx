import React from 'react';
import { SectionId } from '../types';

const Reasons: React.FC = () => {
  // Static Images
  // Reason 1: Fixed in previous step
  const IMAGE_1 = "https://lh3.googleusercontent.com/d/1xo6U5W4et7H-9d3bo2oOhdMHbZhtjkY6";
  // Reason 2: New fixed image
  const IMAGE_2 = "https://lh3.googleusercontent.com/d/14xn5io4M5RClxdBdUcPytOb1DOaD_ifJ";
  // Reason 3: Logo
  const IMAGE_3 = "https://lh3.googleusercontent.com/d/1Zs2I4g3PvmlctIr-zw8tUB67qf7nMgAI";

  return (
    <section id={SectionId.FEATURE} className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
         {/* Header */}
         <div className="text-center mb-20 md:mb-32">
            <div className="inline-block bg-[#FF3B00] text-white font-bold px-6 py-2 rounded-sm mb-6 text-sm md:text-base relative shadow-md">
               即戦力になるために
               <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#FF3B00]"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-800 tracking-tight leading-snug">
               AI CREATOR JAPAN SCHOOLが<br className="md:hidden"/>選ばれる
               <span className="text-[#FF3B00] mx-2">3つの理由</span>
            </h2>
         </div>

         <div className="max-w-6xl mx-auto flex flex-col gap-20 md:gap-32">
            {/* Reason 01 - Static Image */}
            <ReasonBlock
               number="01"
               title="超実践型AIデザインカリキュラム"
               description="WEBデザインの基礎知識の取得からスタートし、ChatGPTやMidjourney、Runwayなどの最新AIツールをフル活用。従来の手法の数倍のスピードで、最終的には実案件レベルの広告クリエイティブやLPを制作・配信まで行う、超実践型のカリキュラムです。"
               image={IMAGE_1}
               isLoading={false}
               fallbackImage="https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?q=80&w=800&auto=format&fit=crop"
               isReversed={false}
            />

            {/* Reason 02 - Static Image */}
            <ReasonBlock
               number="02"
               title="完全1対1のAI活用個人レッスン"
               description="「動画を見るだけ」の一方通行な学習ではありません。現役のAIクリエイター講師が、あなた専属のメンターとして完全1対1で指導します。プロンプトの微調整から、個人の得意分野に合わせたAI活用法の提案まで、徹底的に伴走します。"
               image={IMAGE_2}
               isLoading={false}
               fallbackImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
               isReversed={true}
            />

            {/* Reason 03 - Static Logo */}
            <ReasonBlock
               number="03"
               title="運営会社から直接案件依頼"
               description="成績優秀者の方には、運営会社であるAI CREATOR JAPAN SCHOOLから直接AI制作案件（バナー制作、LP構築、動画編集など）を発注させて頂きます。受講中に制作した作品をポートフォリオとして活用し、卒業と同時にプロとしての実績を作ることが可能です。"
               image={IMAGE_3} 
               isReversed={false}
               isLogo={true} 
            />
         </div>
      </div>
    </section>
  )
}

interface ReasonBlockProps {
  number: string;
  title: string;
  description: string;
  image: string | null;
  isLoading?: boolean;
  fallbackImage?: string;
  isReversed?: boolean;
  isLogo?: boolean;
}

const ReasonBlock: React.FC<ReasonBlockProps> = ({ number, title, description, image, isLoading, fallbackImage, isReversed, isLogo }) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 lg:gap-24`}>
       {/* Image Side */}
       <div className="w-full md:w-1/2">
          <div className={`relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group ${isLogo ? 'bg-gray-50 flex items-center justify-center border border-gray-100' : 'bg-gray-100'}`}>
              
              {/* Image Display */}
              <img 
                src={image || fallbackImage} 
                alt={title} 
                className={`transition-all duration-700 group-hover:scale-105 ${isLogo ? 'w-3/4 object-contain' : 'w-full h-full object-cover'}`}
                referrerPolicy="no-referrer"
              />
          </div>
       </div>

       {/* Text Side */}
       <div className="w-full md:w-1/2 relative">
           <div className="flex flex-col items-start">
               {/* Stylish Number Header */}
               <div className="mb-4 relative">
                   <span className="font-serif italic text-6xl md:text-7xl text-[#FFCBBA] opacity-60 absolute -top-10 -left-6 z-0 select-none">
                       {number}
                   </span>
                   <span className="relative z-10 font-serif italic text-4xl md:text-5xl text-[#FFCBBA] block transform -rotate-6 origin-bottom-left" style={{fontFamily: 'cursive'}}>
                      Reason {number}
                   </span>
               </div>
               
               <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight mt-2">
                  {title}
               </h3>
               
               <div className="w-16 h-1 bg-[#FF3B00] mb-6"></div>

               <p className="text-gray-600 leading-8 font-medium text-base md:text-lg">
                  {description}
               </p>
           </div>
       </div>
    </div>
  )
}

export default Reasons;