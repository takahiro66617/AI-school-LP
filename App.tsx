import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CampaignBanner from './components/CampaignBanner';
import Target from './components/Target';
import AboutDetailed from './components/AboutDetailed';
import Reasons from './components/Reasons';
import Curriculum from './components/Curriculum';
import Flow from './components/Flow';
import Plan from './components/Plan';
import Admissions from './components/Admissions';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import Booking from './components/Booking';

type Page = 'home' | 'privacy' | 'terms';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const navigateToPrivacy = () => {
    setCurrentPage('privacy');
    window.scrollTo(0, 0);
  };

  const navigateToTerms = () => {
    setCurrentPage('terms');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        isSimple={currentPage !== 'home'} 
        onLogoClick={navigateToHome} 
      />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <CampaignBanner />
            <Target />
            <AboutDetailed />
            <Reasons />
            <Curriculum />
            <Flow />
            <Plan />
            <Admissions />
            <FAQ />
            <Booking />
          </>
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicy onBack={navigateToHome} />
        )}

        {currentPage === 'terms' && (
          <Terms onBack={navigateToHome} />
        )}
      </main>

      <Footer 
        onPrivacyClick={navigateToPrivacy}
        onTermsClick={navigateToTerms}
        onHomeClick={navigateToHome}
      />
      <ChatBot />
    </div>
  );
}

export default App;