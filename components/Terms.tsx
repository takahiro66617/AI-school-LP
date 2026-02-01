import React, { useEffect } from 'react';

interface TermsProps {
  onBack: () => void;
}

const Terms: React.FC<TermsProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
            <button 
            onClick={onBack}
            className="text-[#FF3B00] font-bold hover:underline flex items-center gap-2 text-sm md:text-base"
            >
            &larr; トップページに戻る
            </button>
        </div>

        <h1 className="text-3xl md:text-4xl font-black mb-10 border-b-4 border-[#FF3B00] pb-4 inline-block text-gray-900">
            利用規約
        </h1>
        
        <div className="space-y-10 text-gray-700 leading-relaxed font-medium">
           <section>
             <p>
               この利用規約（以下「本規約」といいます）は、AI CREATOR JAPAN SCHOOL（以下「当スクール」といいます）が提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。本サービスを利用される受講生の皆様（以下「利用者」といいます）は、本規約に同意の上、ご利用いただくものとします。
             </p>
           </section>

           <section>
             <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#FF3B00] pl-4">第1条（適用）</h2>
             <p>
               本規約は、利用者と当スクールとの間の本サービスの利用に関わる一切の関係に適用されるものとします。
             </p>
           </section>

           <section>
             <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#FF3B00] pl-4">第2条（受講登録）</h2>
             <p>
               利用者は、当スクールの定める方法により受講登録を申請し、当スクールがこれを承認することによって、利用契約が成立するものとします。当スクールは、利用者に虚偽の申告があった場合など、不適切と判断した場合には利用登録を承認しないことがあります。
             </p>
           </section>

           <section>
             <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#FF3B00] pl-4">第3条（禁止事項）</h2>
             <p className="mb-4">
               利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。
             </p>
             <ul className="list-disc list-inside space-y-2 bg-gray-50 p-6 rounded-xl text-sm md:text-base">
               <li>法令または公序良俗に違反する行為</li>
               <li>犯罪行為に関連する行為</li>
               <li>当スクールのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
               <li>当スクールのサービスの運営を妨害するおそれのある行為</li>
               <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
               <li>不正アクセスをし、またはこれを試みる行為</li>
               <li>他の利用者になりすます行為</li>
               <li>当スクールのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
               <li>その他、当スクールが不適切と判断する行為</li>
             </ul>
           </section>

           <section>
             <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#FF3B00] pl-4">第4条（サービス内容の変更等）</h2>
             <p>
               当スクールは、利用者に通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによって利用者に生じた損害について一切の責任を負いません。
             </p>
           </section>

           <section>
             <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#FF3B00] pl-4">第5条（利用規約の変更）</h2>
             <p>
               当スクールは、必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができるものとします。
             </p>
           </section>

           <section>
             <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#FF3B00] pl-4">第6条（準拠法・裁判管轄）</h2>
             <p>
               本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当スクールの本店所在地を管轄する裁判所を専属的合意管轄とします。
             </p>
           </section>
        </div>

        <div className="mt-16 text-center">
            <button 
            onClick={onBack}
            className="bg-gray-900 text-white font-bold py-4 px-12 rounded-full hover:bg-[#FF3B00] transition-colors shadow-lg"
            >
            トップページに戻る
            </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;