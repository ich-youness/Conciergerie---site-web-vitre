import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './components/pages/Accueil';
import APropos from './components/pages/APropos';
import Services from './components/pages/Services';
import FAQ from './components/pages/FAQ';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Accueil />;
      case 'apropos':
        return <APropos />;
      case 'services':
        return <Services />;
      case 'faq':
        return <FAQ />;
      default:
        return <Accueil />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main id={currentPage}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;