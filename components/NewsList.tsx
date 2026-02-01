import React from 'react';
import { NEWS_ITEMS } from '../constants';
import { SectionId } from '../types';

const NewsList: React.FC = () => {
  return (
    <section id={SectionId.NEWS} className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-yellow-500 font-bold text-sm tracking-widest uppercase mb-2">NEWS</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">お知らせ</h3>
          </div>
          <a href="#" className="hidden md:block text-sm font-bold text-gray-500 hover:text-yellow-500 transition-colors">
            ニュース一覧へ
          </a>
        </div>

        <div className="space-y-6">
          {NEWS_ITEMS.map((news) => (
            <div key={news.id} className="flex flex-col md:flex-row md:items-center gap-4 group cursor-pointer border-b border-gray-100 pb-6 last:border-0">
              <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                <span className="text-gray-400 font-roboto text-sm">{news.date}</span>
                <span className={`text-xs px-2 py-1 rounded bg-gray-100 text-gray-600 font-medium`}>
                  {news.category}
                </span>
              </div>
              <h4 className="flex-grow font-medium text-gray-800 group-hover:text-yellow-500 transition-colors">
                {news.title}
              </h4>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <a href="#" className="text-sm font-bold text-gray-500 hover:text-yellow-500 transition-colors">
            ニュース一覧へ
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsList;