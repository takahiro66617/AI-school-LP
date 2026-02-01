import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SectionId } from '../types';

const FAQ: React.FC = () => {
  return (
    <section id={SectionId.FAQ} className="py-20 md:py-32 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
            <span className="text-[#FF3B00] font-bold tracking-widest text-base md:text-lg uppercase block mb-2">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-800">よくある質問</h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
            <FAQItem 
                question="学習開始までに準備しなければいけないことを教えてください。"
                answer={
                    <div>
                        <p className="mb-4">デザインを仕事にしていくためには、パソコンは必需品。何よりも重要なツールになります。</p>
                        <p className="mb-4">仕事をしていくためにも、効率よく学習を進めるためにも、当スクールとしては以下のスペックをおすすめしています。<br />また、オンライン教材になるため、Webカメラ、マイクが内蔵されているものを取得してください。</p>
                        <div className="bg-gray-100 p-4 rounded-lg text-sm space-y-4">
                            <div>
                                <p className="font-bold mb-1">■ Macの場合</p>
                                <ul className="list-disc list-inside text-gray-700 pl-2">
                                    <li>MacOS：最新のmacOSが動作する</li>
                                    <li>プロセッサ：Intel Core i5以上(デュアルコア：2Ghz以上)</li>
                                    <li>メモリ：16GB以上推奨</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold mb-1">■ Windowsの場合</p>
                                <ul className="list-disc list-inside text-gray-700 pl-2">
                                    <li>Windows10以降(64bit)</li>
                                    <li>メモリ：16GB以上推奨</li>
                                    <li>プロセッサ：Intel Core i5以上(デュアルコア：2Ghz以上)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            />
             <FAQItem 
                question="本業が忙しいのですが、大丈夫ですか？どのくらいの稼働確保が必要ですか？"
                answer={
                    <p>
                        週20時間程度の学習時間を確保頂けることが目安となります。<br/>
                        平日2時間以上/日、休日5時間以上/日の時間を最低目安として下さい。
                    </p>
                }
            />
            <FAQItem 
                question="未経験ですがカリキュラムについていけますか？デザインは完全未経験で、デザインセンスも自信がないのですが大丈夫でしょうか？"
                answer={
                    <p>
                        当スクールはデザイン・WEBマーケティング未経験の方が、知識ゼロから学習スタートすることを想定しております。<br/>
                        デザイン・WEBマーケティングの基本から丁寧に学習できる教材をご用意しておりますので安心してご応募下さい。<br/>
                        デザインセンスは正しい学習と基本知識を学習すれば、一定水準までは必ず到達可能です。<br/>
                        経験豊富な講師陣のフィードバックを受けながらデザインを学ぶことができますので、受講開始時点でのデザインセンスは問いません。
                    </p>
                }
            />
            <FAQItem 
                question="支払い方法と支払いタイミングはいつでしょうか？"
                answer={
                    <p>
                        合格発表後、受講開始までの期間にお支払いの案内をお送りさせて頂きます。<br/>
                        一括払いのほかに、分割払いもご用意しております。
                    </p>
                }
            />
            <FAQItem 
                question="途中で解約の場合、返金はされますか？"
                answer={
                    <p>
                        受講開始後8日間以内でのご解約の場合、受講費用は全額ご返金いたします。
                    </p>
                }
            />
            <FAQItem 
                question="子育てや家事しながら学習は可能ですか？"
                answer={
                    <p>
                        子育てや家事をしながらの学習も可能でございます。<br/>
                        週20時間程度の学習時間を確保が最低目安となりますので、ご参考に検討頂けますと幸いです。
                    </p>
                }
            />
            <FAQItem 
                question="スクールを受講後、デザインのお仕事の紹介などはあるのでしょうか？"
                answer={
                    <p>
                        当スクールからのお仕事紹介のチャンスもございます。<br/>
                        スクール卒業時に優秀生徒に選ばれた場合、運営会社より直接お仕事発注を確約させて頂きます。<br/>
                        また、卒業生限定コミュニティに入会頂くことで、案件やお仕事紹介グループにもご招待させて頂きますので、ぜひご活用ください。
                    </p>
                }
            />
        </div>

      </div>
    </section>
  );
};

interface FAQItemProps {
    question: string;
    answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300">
            {/* Question Header */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-start gap-4 p-6 md:p-8 text-left hover:bg-gray-50 transition-colors relative"
            >
                <span className="text-[#5A95E2] font-black text-2xl leading-none flex-shrink-0 mt-1">Q</span>
                <span className="font-bold text-gray-800 text-base md:text-lg flex-grow pr-8 leading-relaxed">
                    {question}
                </span>
                <div className="absolute right-6 top-8 md:top-9 text-[#FF3B00]">
                    {isOpen ? <ChevronUp size={24} strokeWidth={3} /> : <ChevronDown size={24} strokeWidth={3} />}
                </div>
            </button>

            {/* Answer Content */}
            <div 
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
                <div className="overflow-hidden">
                    <div className="p-6 md:p-8 pt-0 md:pt-0 flex items-start gap-4 border-t border-transparent">
                        <span className="text-[#FF7F50] font-black text-2xl leading-none flex-shrink-0 mt-1">A</span>
                        <div className="text-gray-700 font-medium leading-8 text-sm md:text-base">
                            {answer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;