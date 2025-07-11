import React, { useEffect, useRef } from 'react';
import { Check, Star, Camera, Sparkles, Car, Coffee, MapPin, Clock } from 'lucide-react';

interface ServicesProps {
  onContactClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onContactClick }) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const offreEssentielle = [
    "Création et diffusion des annonces multi-plateformes",
    "Tarification intelligente mise à jour chaque semaine",
    "Accueil des voyageurs (check-in/check-out)",
    "Ménage professionnel et blanchisserie",
    "Gestion des cautions et des litiges",
    "Réassort des consommables hôteliers",
    "Assistance voyageurs 7j/7"
  ];

  const offreComplete = [
    
  "Visite technique de contrôle trimestriel du logement",
  "Reporting photos & vidéos réguliers pour un suivi propriétaire à distance",
  "Audit de performance locative semestriel",
  "Gestion administrative des sinistres et relation avec les assurances",
  "Signature décor – mise en scène saisonnière et émotionnelle du logement",
];

  const servicesProprietaires = [
    { icon: Camera, title: "Shooting photo professionnel", description: "Photos haute qualité pour valoriser votre bien" },
    { icon: Sparkles, title: "Nettoyage complet en profondeur", description: "Remise à neuf complète de votre propriété" },
    { icon: Star, title: "Audit de rentabilité", description: "Analyse détaillée du potentiel de votre bien" },
    { icon: Check, title: "Assistance de rénovation légère", description: "Conseils et coordination pour optimiser votre bien" }
  ];

  const servicesVoyageurs = [
    { icon: Car, title: "Transfert privé aéroport/gare", description: "Service de transport premium" },
    { icon: Coffee, title: "Service de ménage pendant le séjour", description: "Entretien sur demande" },
    { icon: MapPin, title: "Guide de voyage \"Paris authentique\"", description: "Recommandations exclusives" },
    { icon: Clock, title: "Late check-out / early check-in", description: "Flexibilité horaire" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h1 className="font-playfair text-5xl md:text-5xl font-bold text-gradient mb-8 h-20">
              Nos Services
            </h1>
            <p className="text-xl text-bronze-600 font-medium tracking-wider">
              Des solutions sur mesure pour chaque besoin
            </p>
          </div>
        </div>
      </section>

      {/* Offres Principales */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-champagne-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-6">
              Nos Offres Clés
            </h2>
            <p className="text-xl text-charcoal-600">
              Choisissez la formule qui correspond à vos attentes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Liberté Essentielle */}
            <div className="fade-in">
              <div className="card-gradient rounded-2xl p-8 h-full border-2 border-champagne-300 hover:border-gold-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-3xl font-bold text-bronze-800 mb-2">
                    Liberté Essentielle
                  </h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent mb-4">20%</div>
                  <p className="text-charcoal-600">Commission sur les revenus générés</p>
                </div>

                <div className="space-y-4">
                  {offreEssentielle.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check size={20} className="text-gold-600 flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-700">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <button
                    onClick={onContactClick}
                    className="w-full btn-secondary"
                  >
                    Votre bien, entre de bonnes mains. Discutons-en.
                  </button>
                </div>
              </div>
            </div>

            {/* Sérénité Complète */}
            <div className="fade-in">
              <div className="bg-gradient-to-br from-champagne-100 via-gold-100 to-bronze-100 rounded-2xl p-8 h-full border-2 border-gold-400 relative overflow-hidden shadow-xl">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-gold-600 to-bronze-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  Recommandé
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-3xl font-bold text-bronze-800 mb-2">
                    Sérénité Complète
                  </h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent mb-4">25%</div>
                  <p className="text-charcoal-600">Commission sur les revenus générés</p>
                </div>

                <div className="space-y-4">
                  {offreComplete.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check size={20} className="text-gold-600 flex-shrink-0 mt-0.5" />
                      <span className={`text-charcoal-700 ${index >= offreEssentielle.length ? 'font-medium text-bronze-700' : ''}`}>
                        {service}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <button
                    onClick={onContactClick}
                    className="w-full btn-primary"
                  >
                    Déléguez en toute confiance. Contactez-nous dès aujourd'hui !
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services à la carte */}
      <section className="py-20 bg-gradient-to-br from-beige-50 via-cream-100 to-champagne-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-6">
              Services à la Carte
            </h2>
            <p className="text-xl text-charcoal-600">
              Des prestations complémentaires pour une expérience sur mesure
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pour les propriétaires */}
            <div className="fade-in">
              <h3 className="font-playfair text-3xl font-bold text-bronze-800 mb-8 text-center">
                Pour les Propriétaires
              </h3>
              <div className="space-y-6">
                {servicesProprietaires.map((service, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-champagne-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-champagne-200 to-gold-200 rounded-lg p-3">
                        <service.icon size={24} className="text-bronze-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-bronze-800 mb-2">{service.title}</h4>
                        <p className="text-charcoal-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pour les voyageurs */}
            <div className="fade-in">
              <h3 className="font-playfair text-3xl font-bold text-bronze-800 mb-8 text-center">
                Pour les Voyageurs
              </h3>
              <div className="space-y-6">
                {servicesVoyageurs.map((service, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-champagne-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-champagne-200 to-gold-200 rounded-lg p-3">
                        <service.icon size={24} className="text-bronze-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-bronze-800 mb-2">{service.title}</h4>
                        <p className="text-charcoal-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 accent-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à commencer ?
            </h2>
            <p className="text-xl text-cream-100 mb-8">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button
                onClick={onContactClick}
                className="bg-white text-bronze-700 hover:bg-cream-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Profitez de votre temps, on gère le reste. Parlons-en.
              </button> */}
              {/* <button
                onClick={onContactClick}
                className="border-2 border-white text-white hover:bg-white hover:text-bronze-700 px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Demander un devis gratuit
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;