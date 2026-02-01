import React from 'react';
import { COURSE_ITEMS } from '../constants';
import { SectionId } from '../types';
import { ChevronRight } from 'lucide-react';

const CourseList: React.FC = () => {
  return (
    <section id={SectionId.COURSE} className="py-20 md:py-32 bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <span className="text-[#E65505] font-bold tracking-widest text-sm uppercase block mb-2">COURSE</span>
             <h2 className="text-3xl md:text-4xl font-black text-gray-900">
               目的に合わせて選べる<br/>学習コース
             </h2>
          </div>
          <a href="#" className="hidden md:flex items-center text-sm font-bold text-gray-500 hover:text-[#E65505] transition-colors mt-4 md:mt-0">
            全コース一覧を見る <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSE_ITEMS.map((course) => (
            <div key={course.id} className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 bg-[#E65505] text-white text-xs font-bold px-4 py-2">
                  受付中
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#E65505] transition-colors">{course.title}</h3>
                <p className="text-gray-400 text-xs font-bold tracking-wider mb-4 uppercase">{course.titleEn}</p>
                <div className="w-10 h-0.5 bg-gray-200 mb-4 group-hover:bg-[#E65505] transition-colors"></div>
                <p className="text-gray-600 text-sm leading-7">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#E65505] transition-colors">
            全コース一覧を見る <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseList;