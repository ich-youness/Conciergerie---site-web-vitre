import React, { useEffect, useRef } from 'react';
import { TrendingUp, Shield, Star, Eye, ArrowRight, CheckCircle, Award, Gem } from 'lucide-react';

interface AccueilProps {
  onContactClick: () => void;
}

const Accueil: React.FC<AccueilProps> = ({ onContactClick }) => {
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

  const engagements = [
    {
      icon: Award,
      title: "Revenus optimisés en continu",
      description: "Tarification intelligente et stratégies de maximisation des revenus",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Shield,
      title: "Un service d’entretien rigoureux et professionnel",
      description: "Maintenance préventive et soins méticuleux de votre patrimoine",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Gem,
      title: "Prestations haut de gamme",
      description: "Service d'excellence à chaque étape de la gestion",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Eye,
      title: "Suivi clair et transparent",
      description: "Reporting détaillé et communication permanente",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
          <div className="fade-in">
            <img 
              src="/logo principal.png" 
              alt="La Clé du Temps" 
              className="h-24 w-auto mx-auto mb-8"
            />

            <h1 className="font-playfair text-5xl md:text-7xl font-bold bg-gradient-to-r from-bronze-800 via-gold-700 to-champagne-700 bg-clip-text text-transparent mb-4">
              LA CLÉ DU TEMPS
            </h1>
            <p className="text-xl md:text-2xl text-bronze-600 font-medium tracking-wider mb-8">
              VOTRE LIBERTÉ, NOTRE SAVOIR FAIRE
            </p>
            
            <p className="text-lg md:text-xl text-charcoal-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              Bienvenue chez La Clé du Temps, votre conciergerie spécialisée en gestion locative courte durée en Île-de-France. 
              Découvrez une gestion sans contraintes pour maximiser la valeur de votre bien.
            </p>
            <button
              onClick={onContactClick}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Déléguez en toute confiance. Contactez-nous dès aujourd'hui !</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Nos Engagements */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-champagne-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in " >
            <h2 className="font-playfair text-4xl font-semibold text-bronze-800 mb-4">
              Nos Engagements
            </h2>
            <p className="text-xl text-charcoal-600 leading-loose pb-2">
              Quatre piliers fondamentaux qui garantissent votre satisfaction et la valorisation de votre patrimoine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagements.map((engagement, index) => (
              <div key={index} className="text-center group fade-in">
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 h-full group-hover:shadow-2xl transition-all duration-500 border border-white/40 group-hover:border-white/60 group-hover:bg-white/80">
                  <div className={`bg-gradient-to-br ${engagement.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                    <engagement.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-charcoal-800 mb-6 group-hover:text-bronze-800 transition-colors duration-300">
                    {engagement.title}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed text-sm group-hover:text-charcoal-700 transition-colors duration-300">
                    {engagement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Pourquoi nous choisir */}
      <section className="py-20 bg-gradient-to-br from-beige-50 via-cream-100 to-champagne-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-6">
                Pourquoi travailler avec LA CLÉ DU TEMPS ?
              </h2>
              <p className="text-xl text-charcoal-600 mb-8">
                Une expertise reconnue en Île-de-France pour une gestion locative sans compromis
              </p>
              
              <div className="space-y-6">
                {[
                  "Gestion complète et sécurisée, sans stress",
                  "Suivi rigoureux de votre patrimoine",
                  "Rentabilité optimisée tout au long de l'année",
                  "Équipe dédiée et réactive 7j/7",
                  "Technologie de pointe pour la tarification",
                  "Réseau de partenaires de confiance"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-gold-600 flex-shrink-0" />
                    <span className="text-charcoal-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  onClick={onContactClick}
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Votre bien, entre de bonnes mains. Discutons-en.
                </button>
              </div>
            </div>

            <div className="fade-in">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" 
                  alt="Appartement de luxe" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bronze-900/30 via-transparent to-champagne-200/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 accent-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à maximiser vos revenus ?
            </h2>
            <p className="text-xl text-cream-100 mb-8">
              Rejoignez nos propriétaires satisfaits et découvrez une gestion locative sans contraintes
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

export default Accueil;