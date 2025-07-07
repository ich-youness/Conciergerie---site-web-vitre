import React from 'react';
import { Phone, Mail, Globe, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-bronze-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                <span className="text-sm text-cream-200">06 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gold-400" />
                <span className="text-sm text-cream-200">lacledutemps92@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={16} className="text-gold-400" />
                <span className="text-sm text-cream-200">www.lacledutemps.fr</span>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold text-champagne-400">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-400 hover:text-gold-400 transition-colors transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream-400 hover:text-gold-400 transition-colors transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream-400 hover:text-gold-400 transition-colors transform hover:scale-110">
                <Linkedin size={20} />
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