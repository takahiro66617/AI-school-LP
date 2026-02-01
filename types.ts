export interface NavItem {
  label: string;
  href: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: string;
}

export interface CourseItem {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  TOP = 'top',
  ABOUT = 'about',
  FEATURE = 'feature',
  CURRICULUM = 'curriculum',
  FLOW = 'flow',
  PLAN = 'plan',
  FAQ = 'faq',
  // Added missing section IDs to resolve errors in CourseList, NewsList, and Access components
  COURSE = 'course',
  NEWS = 'news',
  ACCESS = 'access',
}