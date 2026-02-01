import React from 'react';
import { SectionId } from '../types';
import { Check, Clock, MessageSquare } from 'lucide-react';

const Plan: React.FC = () => {
  return (
    <section id={SectionId.PLAN} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
         {/* Title Section */}
        <div className="text-center mb-16">
            <span className="text-[#FF3B00] font-bold tracking-widest text-base md:text-lg uppercase block mb-2">Plan</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-800">選べる学習プラン</h2>
        </div>

         {/* Plan Cards Container */}
         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* 6 Month Plan */}
            <PlanCard 
                title="6ヶ月プラン"
                subtitle="未経験からプロを目指す"
                monthlyPrice="63,399"
                totalPrice="380,394"
                description="基礎から応用まで、半年間でしっかりと実力をつけるスタンダードなプラン。"
                hours="週6〜8時間"
            />
            {/* 12 Month Plan */}
            <PlanCard 
                title="12ヶ月プラン"
                subtitle="働きながら着実にスキルアップ"
                monthlyPrice="57,399"
                totalPrice="688,788"
                description="時間をかけてじっくり学びたい方や、働きながらスキル習得を目指す方に最適。"
                hours="週3〜5時間"
                isRecommended={true}
            />
         </div>
         
         <p className="text-center text-xs text-gray-500 mt-10 font-bold">
            ※価格は全て税込表示です。
         </p>
      </div>
    </section>
  );
};

interface PlanCardProps {
    title: string;
    subtitle: string;
    monthlyPrice: string;
    totalPrice: string;
    description: string;
    hours: string;
    isRecommended?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, subtitle, monthlyPrice, totalPrice, description, hours, isRecommended }) => {
    return (
        <div className={`bg-white rounded-3xl overflow-hidden flex flex-col h-full border-2 transition-transform hover:-translate-y-1 duration-300 ${isRecommended ? 'border-[#FF3B00] shadow-2xl relative z-10 scale-100 md:scale-105' : 'border-gray-200 shadow-lg'}`}>
            
            {isRecommended && (
                <div className="bg-[#FF3B00] text-white text-center py-2 font-bold text-sm tracking-widest">
                    POPULAR
                </div>
            )}

            {/* Header */}
            <div className={`py-8 text-center border-b ${isRecommended ? 'bg-[#FFF5F0]' : 'bg-gray-50'}`}>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 font-bold text-sm">{subtitle}</p>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 text-center flex-grow flex flex-col items-center">
                
                {/* Monthly Price Main Display */}
                <div className="mb-6">
                    <div className="flex items-end justify-center gap-1 mb-1 leading-none">
                        <span className="text-sm font-bold text-[#FF3B00] mb-2 mr-1">月々</span>
                        <span className="text-5xl md:text-6xl font-black text-[#FF3B00] tracking-tighter">
                            {monthlyPrice}
                        </span>
                        <span className="text-xl font-bold text-gray-800 mb-1 ml-1">円</span>
                    </div>
                    <p className="text-xs text-gray-500 font-bold">
                        総額 {totalPrice}円（税込）
                    </p>
                </div>

                <div className="w-full h-px bg-gray-200 mb-6"></div>
                
                <p className="text-sm text-gray-700 font-medium leading-relaxed mb-8 text-left w-full">
                    {description}
                </p>

                {/* Support Details */}
                <div className="w-full text-left space-y-4 bg-gray-50 p-5 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-700 font-bold text-sm">
                            <MessageSquare size={18} className="text-[#FF3B00]" />
                            <span>チャットサポート</span>
                        </div>
                        <span className="font-black text-gray-900 text-sm">無制限</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-700 font-bold text-sm">
                            <Clock size={18} className="text-[#FF3B00]" />
                            <span>学習目安</span>
                        </div>
                        <span className="font-black text-gray-900 text-sm">{hours}</span>
                    </div>
                </div>
                
                <a 
                    href="https://www.jicoo.com/event_types/PmiNz6wADCwl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full mt-8 py-4 rounded-full font-black text-lg shadow-md transition-colors text-center ${isRecommended ? 'bg-[#FF3B00] text-white hover:bg-[#E63500]' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                >
                    このプランで申し込む
                </a>

            </div>
        </div>
    );
};

export default Plan;