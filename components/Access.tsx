import React from 'react';
import { SectionId } from '../types';

const Access: React.FC = () => {
  return (
    <section id={SectionId.ACCESS} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-black mb-12">ACCESS</h2>
        
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-bold mb-4">AI CREATOR JAPAN SCHOOL<br/>東京本校</h3>
            <p className="text-gray-600 mb-6 leading-7 text-sm">
              〒101-0062<br/>
              東京都千代田区神田駿河台4-6<br/>
              御茶ノ水ソラシティ アカデミア 4F
            </p>
            <div className="flex flex-col gap-2">
               <p className="text-xs font-bold text-gray-400">交通アクセス</p>
               <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                 <li>JR中央線・総武線「御茶ノ水駅」徒歩1分</li>
                 <li>東京メトロ千代田線「新御茶ノ水駅」直結</li>
                 <li>東京メトロ丸ノ内線「御茶ノ水駅」徒歩4分</li>
               </ul>
            </div>
            <div className="mt-8">
              <a href="#" className="text-[#E65505] font-bold text-sm underline hover:no-underline">
                Google Mapsで見る
              </a>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-64 bg-gray-200 grayscale relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3255273767173!2d139.76342837637845!3d35.69359397258327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c1c5a706599%3A0xe54d621643c72b22!2sOchanomizu%20Sola%20City!5e0!3m2!1sen!2sjp!4v1709257000000!5m2!1sen!2sjp" 
                width="100%" 
                height="100%" 
                style={{border:0, filter: 'grayscale(100%)'}} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Map"
              ></iframe>
          </div>
        </div>
      </div>
      
      {/* Big CV Area */}
      <div className="bg-[#E65505] py-20 mt-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-black mb-6">
            まずは「スクール説明会」に参加しませんか？
          </h2>
          <p className="mb-10 text-white/90">
            カリキュラムの詳細、通い方、卒業後のキャリアなど、<br className="hidden md:inline"/>
            専任のカウンセラーが丁寧にご説明します。
          </p>
          <a 
            href="https://www.jicoo.com/event_types/PmiNz6wADCwl"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#E65505] text-xl font-bold py-4 px-12 rounded-full shadow-lg hover:bg-gray-100 transition-colors hover:scale-105 transform duration-200"
          >
            無料説明会を予約する
            <span className="text-xs block font-normal mt-1 text-gray-500">所要時間: 60分〜90分</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Access;