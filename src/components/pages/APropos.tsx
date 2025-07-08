import React, { useEffect, useRef } from 'react';
import { Users, Target, Award, TrendingUp, Shield, Eye } from 'lucide-react';

const APropos: React.FC = () => {
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

  const expertises = [
    {
      icon: Shield,
      title: "Gestion complète et sécurisée, sans stress",
      description: "Prise en charge intégrale de votre bien avec une sécurité maximale et une tranquillité d'esprit totale."
    },
    {
      icon: Eye,
      title: "Suivi rigoureux de votre patrimoine",
      description: "Surveillance continue et maintenance préventive pour préserver et valoriser votre investissement."
    },
    {
      icon: TrendingUp,
      title: "Rentabilité optimisée tout au long de l'année",
      description: "Stratégies avancées de pricing et d'occupation pour maximiser vos revenus locatifs en permanence."
    }
  ];

  const stats = [
    { number: "150+", label: "Biens gérés" },
    { number: "95%", label: "Taux d'occupation" },
    { number: "5★", label: "Note moyenne" },
    { number: "24/7", label: "Support client" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h1 className="font-playfair text-5xl md:text-5xl font-bold text-gradient mb-8 h-20">
              À Propos
            </h1>
            <p className=" text-xl text-bronze-600 font-medium tracking-wider">
              L'excellence au service de votre patrimoine
            </p>
          </div>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-champagne-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-6">
                Qui sommes-nous ?
              </h2>
              <div className="space-y-6 text-lg text-charcoal-700 leading-relaxed">
                <p>
                  <strong className="text-bronze-600">La Clé du Temps</strong>, c'est bien plus qu'une conciergerie. 
                  Spécialisés dans la gestion locative courte durée et saisonnière en Île-de-France, 
                  nous accompagnons les propriétaires et investisseurs avec une prise en charge complète, 
                  fiable et hautement qualitative.
                </p>
                <p>
                  Notre équipe d'experts passionnés met son savoir-faire au service de votre réussite, 
                  en combinant innovation technologique et service personnalisé pour créer une expérience 
                  unique tant pour les propriétaires que pour les voyageurs.
                </p>
                <p>
                  Basés en Île-de-France, nous connaissons parfaitement les spécificités du marché local 
                  et les attentes d'une clientèle exigeante, ce qui nous permet d'optimiser chaque aspect 
                  de la gestion de votre bien.
                </p>
              </div>
            </div>

            <div className="fade-in">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                  alt="Équipe professionnelle" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bronze-900/30 via-transparent to-champagne-200/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Objectif */}
      <section className="py-20 bg-gradient-to-br from-champagne-100 via-beige-100 to-bronze-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <div className="bg-gradient-to-br from-gold-500 to-bronze-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Target size={40} className="text-white" />
            </div>
            <h2 className="font-playfair text-4xl font-semibold text-bronze-800 mb-4">
              Notre Objectif
            </h2>
            <p className="text-2xl md:text-3xl text-charcoal-700 font-light leading-relaxed mb-8">
              "Vous libérer des contraintes, tout en maximisant la valeur de vos biens."
            </p>
            <div className="card-gradient p-8 rounded-2xl shadow-lg border border-champagne-200">
              <p className="text-lg text-charcoal-600 leading-relaxed">
                Nous croyons que la gestion locative ne doit pas être une source de stress. 
                Notre mission est de transformer votre investissement immobilier en une source 
                de revenus passive et sereine, pendant que vous vous concentrez sur ce qui compte vraiment pour vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Expertise */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-champagne-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-playfair text-4xl font-semibold text-bronze-800 mb-4">
              Notre Expertise
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Trois domaines d'excellence qui font la différence dans la gestion de votre patrimoine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertises.map((expertise, index) => (
              <div key={index} className="fade-in">
                <div className="card-gradient rounded-2xl p-8 h-full text-center group hover:shadow-xl transition-all duration-300 border border-champagne-200">
                  <div className="bg-gradient-to-br from-gold-500 to-bronze-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:from-gold-600 group-hover:to-bronze-700 transition-all duration-300 shadow-lg">
                    <expertise.icon size={40} className="text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-bronze-800 mb-4">
                    {expertise.title}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed">
                    {expertise.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-20 accent-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Nos Résultats Parlent
            </h2>
            <p className="text-xl text-cream-100">
              Des chiffres qui témoignent de notre excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="fade-in text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-cream-100 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-champagne-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-6">
              Nos Valeurs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-in text-center">
              <div className="bg-gradient-to-br from-gold-500 to-bronze-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-bronze-800 mb-4">Excellence</h3>
              <p className="text-charcoal-600">
                Nous visons l'excellence dans chaque détail, de l'accueil des voyageurs à l'entretien de votre bien.
              </p>
            </div>

            <div className="fade-in text-center">
              <div className="bg-gradient-to-br from-champagne-500 to-gold-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-bronze-800 mb-4">Confiance</h3>
              <p className="text-charcoal-600">
                La transparence et la communication sont au cœur de notre relation avec nos clients.
              </p>
            </div>

            <div className="fade-in text-center">
              <div className="bg-gradient-to-br from-bronze-500 to-charcoal-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-bronze-800 mb-4">Innovation</h3>
              <p className="text-charcoal-600">
                Nous utilisons les dernières technologies pour optimiser la gestion et maximiser vos revenus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APropos;