import React from 'react';
import { ChevronDown, Database, BookOpen, Cpu, Sparkles, PenTool } from 'lucide-react';

const Admissions: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#FFF9F5]">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header (Unified Style) */}
        <div className="text-center mb-12">
            <span className="text-[#FF3B00] font-bold tracking-widest text-base md:text-lg uppercase block mb-2">Campaign</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-800">
                今だけ！豪華5大特典
            </h2>
        </div>

        {/* Date Pill */}
        <div className="flex justify-center mb-16">
            <div className="bg-white border-2 border-[#FF3B00] text-[#FF3B00] font-bold px-8 py-3 rounded-full shadow-sm text-lg md:text-xl tracking-wider">
                対象期間 〜2026年1月8日(木)
            </div>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-6">
            
            {/* Row 1: Free Consultation Benefits */}
            <div className="grid md:grid-cols-2 gap-6">
                <BenefitCard 
                    number="01"
                    category="即戦力リソース"
                    title="ビジネスですぐに使える！生成AIプロンプト集"
                    description="コピーライティング、画像生成、業務効率化など、厳選されたプロンプトをプレゼント。"
                    icon={<Database size={32} strokeWidth={1.5} />}
                />
                <BenefitCard 
                    number="02"
                    category="完全保存版"
                    title="厳選！最新AIツール活用完全ガイド"
                    description="画像生成、動画制作、業務効率化など、現場で即戦力となる最新AIツールとその活用法を網羅したガイドブック。"
                    icon={<BookOpen size={32} strokeWidth={1.5} />}
                />
            </div>

            {/* Divider */}
            <div className="relative py-8 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-dashed border-[#FFD9CC]"></div>
                </div>
                <div className="relative bg-[#FFF9F5] px-6">
                    <span className="bg-[#FF3B00] text-white font-bold px-6 py-2 rounded-full text-sm md:text-base shadow-md">
                        さらにコース申し込みで
                    </span>
                </div>
            </div>

             {/* Row 2: Course Benefits */}
             <div className="grid md:grid-cols-2 gap-6">
                <BenefitCard 
                    number="03"
                    category="マスター講座"
                    title="Copilot完全マスター講座"
                    description="Microsoft Copilotを活用して、資料作成やメール対応を自動化する方法を学びます。"
                    icon={<Cpu size={32} strokeWidth={1.5} />}
                    isHighlight
                />
                 <BenefitCard 
                    number="04"
                    category="マスター講座"
                    title="Gemini完全マスター講座"
                    description="Google Geminiのマルチモーダル機能を使いこなし、分析や創造的タスクを効率化。"
                    icon={<Sparkles size={32} strokeWidth={1.5} />}
                    isHighlight
                />
            </div>

            {/* Row 3: Final Benefit */}
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto w-full">
                <BenefitCard 
                    number="05"
                    category="スキルアップ"
                    title="Obsidian x Cursor 完全マスター講座"
                    description="最新のエディタとナレッジ管理ツールを組み合わせた、最強の知的生産ワークフロー。"
                    icon={<PenTool size={32} strokeWidth={1.5} />}
                    isHighlight
                />
            </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
                <span className="h-px w-8 bg-gray-400 transform -rotate-45"></span>
                <p className="font-bold text-lg md:text-xl text-gray-800">30秒でカンタン予約</p>
                <span className="h-px w-8 bg-gray-400 transform rotate-45"></span>
            </div>
            
            <a 
                href="https://www.jicoo.com/event_types/PmiNz6wADCwl"
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full max-w-2xl mx-auto bg-[#FF3B00] hover:bg-[#E63500] text-white font-black text-xl md:text-2xl py-6 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
            >
                無料相談を予約する
                <ChevronDown className="transform -rotate-90 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-4 text-sm text-gray-500 font-bold">
                ※公式LINE登録で特典の受け取り方法をご案内します
            </p>
        </div>

      </div>
    </section>
  );
};

// Helper Component for Benefit Card
interface BenefitCardProps {
    number: string;
    category: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    isHighlight?: boolean;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ number, category, title, description, icon, isHighlight }) => {
    return (
        <div className={`bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start shadow-sm border-2 transition-transform hover:-translate-y-1 duration-300 ${isHighlight ? 'border-[#FF3B00]/30' : 'border-gray-100'}`}>
            {/* Left: Icon Area */}
            <div className="flex-shrink-0">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isHighlight ? 'bg-[#FFF5F0] text-[#FF3B00]' : 'bg-gray-100 text-gray-600'}`}>
                    {icon}
                </div>
            </div>

            {/* Right: Content */}
            <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                    <span className="font-serif italic text-2xl text-[#FF3B00] font-bold">#{number}</span>
                    <span className="text-xs font-bold text-white bg-gray-800 px-2 py-1 rounded-md">{category}</span>
                </div>
                
                <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-2 leading-tight">
                    {title}
                </h4>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Admissions;