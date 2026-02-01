import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-200" id="booking">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
            <span className="text-[#FF3B00] font-bold tracking-widest text-base md:text-lg uppercase block mb-2">Booking</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-800">
                無料個別相談の予約
            </h2>
            <p className="mt-6 text-gray-600 font-bold leading-relaxed">
                以下のボタンから予約ページへ移動して、<br className="hidden md:inline"/>
                ご希望の日時を選択してください。
            </p>
        </div>

        {/* 予約ページへ遷移させるメインボタン */}
        <div className="flex justify-center pb-12">
            <a 
                href="https://www.jicoo.com/event_types/PmiNz6wADCwl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-[#FF3B00] hover:bg-[#E63500] text-white px-10 py-6 rounded-full transition-all font-black text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-200"
            >
                <Calendar size={28} />
                <span>予約ページを開く</span>
                <ExternalLink size={20} strokeWidth={3} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Booking;