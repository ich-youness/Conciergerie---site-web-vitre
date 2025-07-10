import React, { useEffect, useRef } from 'react';
import { TrendingUp, Shield, Star, Eye, ArrowRight, CheckCircle } from 'lucide-react';

const Accueil: React.FC = () => {
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
      icon: TrendingUp,
      title: "Revenus optimisés en continu",
      description: "Tarification intelligente et stratégies de maximisation des revenus"
    },
    {
      icon: Shield,
      title: "Un service d’entretien rigoureux et professionnel",
      description: "Maintenance préventive et soins méticuleux de votre patrimoine"
    },
    {
      icon: Star,
      title: "Prestations haut de gamme",
      description: "Service d'excellence à chaque étape de la gestion"
    },
    {
      icon: Eye,
      title: "Suivi clair et transparent",
      description: "Reporting détaillé et communication permanente"
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
              className="h-32 w-auto mx-auto mb-6"
            />
            <h1 className="font-playfair text-5xl md:text-7xl font-bold bg-gradient-to-r from-bronze-800 via-gold-700 to-champagne-700 bg-clip-text text-transparent mb-4">
              LA CLÉ DU TEMPS
            </h1>
            <p className="text-xl md:text-2xl text-bronze-600 font-medium tracking-wider mb-6">
              VOTRE LIBERTÉ, NOTRE SAVOIR FAIRE
            </p>
            <p className="text-lg md:text-xl text-charcoal-700 max-w-3xl mx-auto mb-10 leading-relaxed">
              Bienvenue chez La Clé du Temps, votre conciergerie spécialisée en gestion locative courte durée en Île-de-France. 
              Découvrez une gestion sans contraintes pour maximiser la valeur de votre bien.
            </p>
            <a href="mailto:lacledutemps92@gmail.com" className="btn-primary inline-flex items-center space-x-2">
              <span>Contactez-nous pour une gestion sereine</span>
              <ArrowRight size={20} />
            </a>
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
              <div key={index} className="text-center group">
                <div className=" rounded-2xl p-8 h-full  group-hover:shadow-xl  border border-champagne-200">
                  <div className="bg-gradient-to-br from-gold-500 to-bronze-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:from-gold-600 group-hover:to-bronze-700  shadow-lg">
                    <engagement.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-bronze-800 mb-4">
                    {engagement.title}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed">
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
                <a href="#services" className="btn-secondary inline-block">
                  Découvrir nos services
                </a>
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
              <a href="mailto:lacledutemps92@gmail.com" className="bg-white text-bronze-700 hover:bg-cream-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                Demander un devis gratuit
              </a>
              <a href="mailto:lacledutemps92@gmail.com" className="border-2 border-white text-white hover:bg-white hover:text-bronze-700 px-8 py-3 rounded-lg font-medium transition-all duration-300 text-center">
                Planifier un rendez-vous
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;