import React from 'react';
import { Phone, Mail, Globe, Facebook, Instagram, Send } from 'lucide-react';

interface FooterProps {
  contactFormRef?: React.RefObject<HTMLDivElement>;
}

const Footer: React.FC<FooterProps> = ({ contactFormRef }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous recontacterons rapidement.');
  };

  return (
    <footer className="bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-bronze-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Formulaire de contact compact */}
        <div ref={contactFormRef} className="mb-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-center text-champagne-400 mb-6">
              Contactez-nous
            </h3>
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-cream-300 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-transparent text-sm"
                  placeholder="Nom complet *"
                />
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-cream-300 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-transparent text-sm"
                  placeholder="Email *"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-cream-300 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-transparent text-sm"
                  placeholder="Téléphone"
                />
              </div>
              <div className="mb-4">
                <textarea
                  required
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-cream-300 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-transparent resize-none text-sm"
                  placeholder="Votre message *"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-gold-600 to-bronze-600 hover:from-gold-700 hover:to-bronze-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 inline-flex items-center space-x-2 text-sm"
                >
                  <Send size={16} />
                  <span>Envoyer</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et slogan */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo principal.png" 
                alt="La Clé du Temps" 
                className="h-10 w-auto filter brightness-0 invert"
              />
              <div>
                <h3 className="font-playfair text-lg font-bold bg-gradient-to-r from-champagne-300 to-gold-300 bg-clip-text text-transparent">
                  LA CLÉ DU TEMPS
                </h3>
                <p className="text-xs text-champagne-400 font-medium tracking-wider">VOTRE LIBERTÉ, NOTRE SAVOIR FAIRE</p>
              </div>
            </div>
            <p className="text-cream-300 text-sm">
              Conciergerie spécialisée en gestion locative courte durée en Île-de-France
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold text-champagne-400">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gold-400" />
                <span className="text-sm text-cream-200">+33 6 62 59 15 78</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gold-400" />
                <span className="text-sm text-cream-200">lacledutemps92@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={16} className="text-gold-400" />
                <span className="text-sm text-cream-200">www.lacledutemps.com</span>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold text-champagne-400">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61577674187387" className="text-cream-400 hover:text-gold-400 transition-colors transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/lacledutemps92/" className="text-cream-400 hover:text-gold-400 transition-colors transform hover:scale-110">
                <Instagram size={20} />
              </a>
             
            </div>
            <div className="pt-4">
              <a href="#" className="text-sm text-cream-400 hover:text-champagne-400 transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gradient-to-r from-bronze-700 to-charcoal-700 mt-8 pt-8 text-center">
          <p className="text-sm text-cream-400">
            © 2024 La Clé du Temps. Tous droits réservés. | Île-de-France
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;