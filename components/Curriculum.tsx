import React from 'react';
import { SectionId } from '../types';

const Curriculum: React.FC = () => {
  return (
    <section id={SectionId.CURRICULUM} className="py-20 md:py-32 bg-[#FFF9F5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
            <span className="text-[#FF3B00] font-bold tracking-widest text-base md:text-lg uppercase block mb-2">Curriculum</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-800">カリキュラム紹介</h2>
        </div>

        {/* Basic Course Banner */}
        <div className="flex justify-center mb-8">
            <div className="bg-[#FF3B00] text-white font-bold text-xl md:text-2xl py-3 px-12 rounded-lg shadow-md tracking-wider">
                ベーシックコース
            </div>
        </div>

        {/* Description */}
        <div className="text-center max-w-3xl mx-auto mb-16 text-gray-700 font-medium leading-relaxed">
            <p>
                AIツールの基礎から、デザインとマーケティングの基礎知識を学び、<br className="hidden md:inline" />
                AIを活用してバナーデザインやLPデザイン、SNS運用を実務レベルで行えるようになることをゴールとしたコースです。
            </p>
        </div>

        {/* Two Columns Container */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Left Column: AI x Web Design */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#FFD9CC] flex flex-col h-full">
                <div className="text-center mb-10 pb-4 border-b-2 border-[#FF3B00] w-fit mx-auto px-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#FF3B00]">AI×WEBデザイン</h3>
                </div>
                
                <div className="flex-grow space-y-10">
                    {/* Sub Section 1 */}
                    <div>
                        <div className="flex items-center mb-5">
                            <span className="bg-[#FF3B00] text-white font-bold px-4 py-1.5 rounded-full text-sm shadow-sm">WEBデザイン基礎</span>
                            <div className="h-px bg-[#FFE5DC] flex-grow ml-4"></div>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-3 font-bold text-gray-700 text-sm md:text-base">
                            <ListItem>WEBデザイン概論</ListItem>
                            <ListItem>レイアウト・タイポグラフィ</ListItem>
                            <ListItem>AIによる配色提案</ListItem>
                            <ListItem>画像生成AI活用</ListItem>
                            <ListItem>バナーデザイン制作</ListItem>
                            <ListItem>LPデザイン制作</ListItem>
                            <ListItem>UIデザインツール活用</ListItem>
                        </ul>
                    </div>

                    {/* Sub Section 2 */}
                    <div>
                        <div className="flex items-center mb-5">
                            <span className="bg-[#FF3B00] text-white font-bold px-4 py-1.5 rounded-full text-sm shadow-sm">AIクリエイティブ実践</span>
                            <div className="h-px bg-[#FFE5DC] flex-grow ml-4"></div>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-3 font-bold text-gray-700 text-sm md:text-base">
                            <ListItem>ベクターグラフィック作成</ListItem>
                            <ListItem>AI画像編集・合成</ListItem>
                            <ListItem>動画素材生成</ListItem>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Right Column: AI x SNS Marketing */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#FFD9CC] flex flex-col h-full">
                <div className="text-center mb-10 pb-4 border-b-2 border-[#FF3B00] w-fit mx-auto px-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#FF3B00]">AI×SNSマーケティング</h3>
                </div>
                
                <div className="flex-grow space-y-10">
                    {/* Sub Section 1 */}
                    <div>
                        <div className="flex items-center mb-5">
                            <span className="bg-[#FF3B00] text-white font-bold px-4 py-1.5 rounded-full text-sm shadow-sm">WEB・SNS基礎</span>
                            <div className="h-px bg-[#FFE5DC] flex-grow ml-4"></div>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-3 font-bold text-gray-700 text-sm md:text-base">
                            <ListItem>WEBマーケティング概論</ListItem>
                            <ListItem>SEO × AIライティング</ListItem>
                            <ListItem>アクセス解析・データ分析</ListItem>
                            <ListItem>AI顧客インサイト分析</ListItem>
                        </ul>
                    </div>

                    {/* Sub Section 2 */}
                    <div>
                        <div className="flex items-center mb-5">
                            <span className="bg-[#FF3B00] text-white font-bold px-4 py-1.5 rounded-full text-sm shadow-sm">AIマーケティング実践</span>
                            <div className="h-px bg-[#FFE5DC] flex-grow ml-4"></div>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-3 font-bold text-gray-700 text-sm md:text-base">
                            <ListItem>主要SNSアルゴリズム攻略</ListItem>
                            <ListItem>AIコピーライティング</ListItem>
                            <ListItem>クリエイティブPDCA</ListItem>
                            <ListItem>競合・トレンド分析</ListItem>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

const ListItem: React.FC<{children: React.ReactNode}> = ({children}) => (
    <li className="flex items-center gap-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B00] shrink-0"></span>
        <span>{children}</span>
    </li>
);

export default Curriculum;