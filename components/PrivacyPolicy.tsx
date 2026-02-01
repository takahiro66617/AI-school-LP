import React, { useEffect } from 'react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
            プライバシーポリシー
        </h1>
        
        <div className="space-y-10 text-gray-700 leading-relaxed font-medium">
           <section>
             <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#FF3B00] pl-4">1. 個人情報の定義</h2>
             <p>
               本プライバシーポリシーにおける「個人情報」とは、個人情報の保護に関する法律（以下「個人情報保護法」といいます）第2条第1項に定める個人情報を指し、氏名、生年月日、住所、電話番号、メールアドレス、その他特定の個人を識別できる情報を意味します。
             </p>
           </section>

           <section>
             <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#FF3B00] pl-4">2. 個人情報の取得と利用目的</h2>
             <p className="mb-4">
               AI CREATOR JAPAN SCHOOL（以下「当スクール」といいます）は、以下の目的で個人情報を取得・利用いたします。
             </p>
             <ul className="list-disc list-inside space-y-2 bg-gray-50 p-6 rounded-xl">
               <li>当スクールのサービス提供、講座の運営および管理のため</li>
               <li>お問い合わせ、ご相談、資料請求への対応のため</li>
               <li>当スクールのサービスに関するご案内、メールマガジンの配信のため</li>
               <li>サービス改善、新規サービス開発のためのアンケート実施および分析のため</li>
               <li>法令に基づく対応のため</li>
             </ul>
           </section>

           <section>
             <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#FF3B00] pl-4">3. 個人情報の第三者提供</h2>
             <p>
               当スクールは、法令に定める場合を除き、事前にご本人の同意を得ることなく、個人情報を第三者に提供することはありません。ただし、利用目的の達成に必要な範囲内で、業務委託先に個人情報の取り扱いを委託する場合があります。その際は、委託先に対して必要かつ適切な監督を行います。
             </p>
           </section>

           <section>
             <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#FF3B00] pl-4">4. 個人情報の安全管理</h2>
             <p>
               当スクールは、取得した個人情報の漏洩、滅失または毀損の防止、その他個人情報の安全管理のために、必要かつ適切な措置を講じます。また、セキュリティシステムの維持・管理体制の整備などの安全対策を実施し、個人情報の厳重な管理を行います。
             </p>
           </section>

           <section>
             <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#FF3B00] pl-4">5. 個人情報の開示・訂正・利用停止等</h2>
             <p>
               当スクールが保有する個人情報について、ご本人から開示、訂正、追加、削除、利用停止等のご請求があった場合には、ご本人であることを確認の上、法令に従い速やかに対応いたします。
             </p>
           </section>

           <section>
             <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#FF3B00] pl-4">6. お問い合わせ窓口</h2>
             <p>
               本ポリシーに関するお問い合わせは、以下の窓口までお願いいたします。
             </p>
             <div className="mt-4 bg-gray-50 p-6 rounded-xl">
               <p className="font-bold">AI CREATOR JAPAN SCHOOL 運営事務局</p>
               <p>お問い合わせフォームよりご連絡ください。</p>
             </div>
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

export default PrivacyPolicy;