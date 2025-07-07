import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'À propos' },
    { id: 'services', label: 'Services' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cream-50/95 backdrop-blur-md shadow-lg border-b border-champagne-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo principal.png" 
              alt="La Clé du Temps" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="font-playfair text-xl font-bold bg-gradient-to-r from-bronze-800 via-gold-700 to-champagne-700 bg-clip-text text-transparent">
                LA CLÉ DU TEMPS
              </h1>
              <p className="text-xs text-bronze-600 font-medium tracking-wider">VOTRE LIBERTÉ, NOTRE SAVOIR FAIRE</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`font-medium transition-all duration-300 relative ${
                  currentPage === item.id
                    ? 'text-bronze-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-champagne-500 after:to-gold-600'
                    : 'text-charcoal-700 hover:text-bronze-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-charcoal-700 hover:text-bronze-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-cream-50/95 backdrop-blur-md border-t border-champagne-200">
            <nav className="py-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 font-medium transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-bronze-700 bg-gradient-to-r from-champagne-100 to-cream-200'
                      : 'text-charcoal-700 hover:text-bronze-600 hover:bg-cream-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;