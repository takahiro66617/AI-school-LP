import { NavItem, NewsItem, CourseItem, SectionId } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'スクールについて', href: `#${SectionId.ABOUT}` },
  { label: '特徴', href: `#${SectionId.FEATURE}` },
  { label: 'カリキュラム', href: `#${SectionId.CURRICULUM}` },
  { label: '受講の流れ', href: `#${SectionId.FLOW}` },
  { label: '料金プラン', href: `#${SectionId.PLAN}` },
  { label: 'よくある質問', href: `#${SectionId.FAQ}` },
];

export const NEWS_ITEMS: NewsItem[] = [
  { id: '1', date: '2024.03.01', title: '【新設】AI×SNSマーケティング専攻 4月生募集開始', category: 'Admission' },
  { id: '2', date: '2024.02.20', title: '卒業生が生成AI活用コンテストでグランプリを受賞しました', category: 'Report' },
  { id: '3', date: '2024.02.15', title: 'ChatGPT-4oを活用したカリキュラム・アップデートのお知らせ', category: 'Info' },
];

export const COURSE_ITEMS: CourseItem[] = [
  {
    id: 'ai-sns',
    title: 'AI×SNSマーケティング専攻',
    titleEn: 'AI x SNS Marketing Course',
    description: '企画・投稿作成・分析までAIで自動化。InstagramやTikTokで爆発的な認知を獲得し、集客を最大化する次世代マーケターへ。',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ai-web',
    title: 'AI×Webデザイン専攻',
    titleEn: 'AI x Web Design Course',
    description: 'ChatGPTやMidjourneyを活用し、制作時間を半減しながらクオリティを最大化。コーディングもAIペアプログラミングで高速習得。',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ai-video',
    title: '生成AI動画クリエイター専攻',
    titleEn: 'Generative AI Video Course',
    description: 'SoraやRunwayなど最新動画生成AIをマスター。撮影なしでハイクオリティな動画広告やコンテンツを生み出す技術を学ぶ。',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export const CONTACT_TEXT = `
まずは無料説明会へご参加ください。
AIキャリア相談も実施しています。
`;