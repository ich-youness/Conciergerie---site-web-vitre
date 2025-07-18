import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './components/pages/Accueil';
import APropos from './components/pages/APropos';
import Services from './components/pages/Services';
import FAQ from './components/pages/FAQ';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');
  const contactFormRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // Défiler vers le haut de la page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Accueil onContactClick={scrollToContactForm} />;
      case 'apropos':
        return <APropos onContactClick={scrollToContactForm} />;
      case 'services':
        return <Services onContactClick={scrollToContactForm} />;
      case 'faq':
        return <FAQ onContactClick={scrollToContactForm} />;
      default:
        return <Accueil onContactClick={scrollToContactForm} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      <main>
        {renderPage()}
      </main>
      <Footer contactFormRef={contactFormRef} />
    </div>
  );
}

export default App;