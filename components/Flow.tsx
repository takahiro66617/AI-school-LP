import React from 'react';
import { MessageCircle, MonitorPlay, FileText, Users } from 'lucide-react';
import { SectionId } from '../types';

const Flow: React.FC = () => {
  return (
    <section id={SectionId.FLOW} className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#FF3B00] font-bold tracking-widest text-base md:text-lg uppercase block mb-2">Flow</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-800">受講開始までの流れ</h2>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col items-center">
            
            {/* Step 01 */}
            <FlowStep 
                step="01"
                title="無料相談の日程調整"
                description="サイトの応募フォーム or LINEにて、ご希望の日程をお送りください。"
                icon={<MessageCircle size={48} strokeWidth={1.5} />}
            />

            <Arrow />

            {/* Step 02 */}
            <FlowStep 
                step="02"
                title="オンライン面談"
                description="スクールの概要について説明します。スタッフと1対1ですので、お気軽にご相談・ご質問いただけます。"
                icon={<MonitorPlay size={48} strokeWidth={1.5} />}
            />

            <Arrow />

            {/* Step 03 */}
            <FlowStep 
                step="03"
                title="入学希望申込"
                description="入学をご希望の方はフォームよりお申し込みいただけます。"
                icon={<FileText size={48} strokeWidth={1.5} />}
            />

            <Arrow />

            {/* Step 04 */}
            <FlowStep 
                step="04"
                title="入会"
                description="お手続き完了後、すぐに学習を開始いただけます。"
                icon={<Users size={48} strokeWidth={1.5} />}
            />

        </div>
      </div>
    </section>
  );
};

interface FlowStepProps {
    step: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const FlowStep: React.FC<FlowStepProps> = ({ step, title, description, icon }) => {
    return (
        <div className="bg-white rounded-xl p-8 md:py-10 md:px-12 w-full flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-sm">
            {/* Left Side: Icon & Title */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 md:w-[280px] shrink-0">
                <div className="text-[#FF7F50] shrink-0 p-2">
                    {icon}
                </div>
                <div className="text-center md:text-left">
                    <span className="text-[#FF3B00] font-bold text-xs md:text-sm tracking-wider block mb-1">STEP {step}</span>
                    <h3 className="text-gray-900 font-bold text-lg md:text-xl leading-tight">{title}</h3>
                </div>
            </div>

            {/* Divider for PC */}
            <div className="hidden md:block w-px h-16 bg-gray-100 shrink-0"></div>

            {/* Right Side: Description */}
            <div className="w-full text-left">
                <p className="text-gray-700 font-medium text-sm md:text-base leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

const Arrow: React.FC = () => {
    return (
        <div className="py-6">
            <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-[#E0E0E0]"></div>
        </div>
    );
};

export default Flow;