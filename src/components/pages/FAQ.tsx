import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, Globe } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
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

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "Quelle est la différence entre les offres Liberté Essentielle et Sérénité Complète ?",
      answer: "L'offre Sérénité Complète inclut tous les services de la Liberté Essentielle, avec en plus des visites techniques trimestrielles, des reportings multimédias réguliers, un audit de performance semestriel, et une optimisation décorative saisonnière. Cette formule premium vous offre un suivi encore plus approfondi et des services exclusifs pour maximiser l'attractivité de votre bien."
    },
    {
      question: "Comment optimisez-vous ma rentabilité locative ?",
      answer: "Grâce à notre tarification intelligente mise à jour hebdomadairement, une présence multi-plateformes (Airbnb, Booking.com, etc.), et des prestations hôtelières qui augmentent l'attractivité de votre bien. Nous analysons en permanence le marché local, les événements, la saisonnalité et la concurrence pour ajuster les prix de manière optimale. Notre expertise nous permet d'atteindre des taux d'occupation supérieurs à 95%."
    },
    {
      question: "Proposez-vous des services ponctuels sans engagement ?",
      answer: "Oui, nos services à la carte (shooting photo professionnel, audit de rentabilité, nettoyage en profondeur, transferts privés...) sont disponibles sans souscription à nos offres principales. Cela vous permet de tester notre qualité de service ou de bénéficier de prestations spécifiques selon vos besoins ponctuels."
    },
    {
      question: "Dans quelles zones d'Île-de-France intervenez-vous ?",
      answer: "Nous couvrons l'ensemble de l'Île-de-France, avec une expertise particulière sur Paris et la petite couronne (92, 93, 94). Notre équipe locale connaît parfaitement les spécificités de chaque arrondissement et commune, ce qui nous permet d'adapter notre stratégie à votre marché local."
    },
    {
      question: "Comment se déroule l'accueil des voyageurs ?",
      answer: "Nous gérons intégralement l'accueil avec un service de check-in/check-out professionnel. Nos équipes accueillent personnellement chaque voyageur, vérifient l'état du logement, remettent les clés et fournissent toutes les informations nécessaires. Nous sommes également disponibles 24h/24 pour toute urgence pendant le séjour."
    },
    {
      question: "Quel est le délai pour commencer la gestion de mon bien ?",
      answer: "Une fois votre bien visité et notre contrat signé, nous pouvons généralement commencer la gestion sous 7 à 10 jours. Ce délai inclut la création des annonces, le shooting photo professionnel, la mise en place des équipements nécessaires et la configuration de tous nos outils de gestion."
    },
    {
      question: "Comment puis-je suivre les performances de mon bien ?",
      answer: "Vous recevez des rapports détaillés mensuels incluant les revenus, le taux d'occupation, les avis clients, et les photos de contrôle. Avec l'offre Sérénité Complète, vous bénéficiez en plus de reportings photos/vidéos réguliers et d'audits de performance semestriels. Vous avez également accès à un espace client en ligne pour suivre vos performances en temps réel."
    },
    {
      question: "Que se passe-t-il en cas de dégradation ou de problème ?",
      answer: "Nous gérons intégralement les cautions, les litiges et les éventuelles dégradations. Notre assurance professionnelle couvre les dommages, et nous avons un réseau de partenaires artisans pour les réparations rapides. Vous êtes informé de tout incident et de sa résolution, sans avoir à vous en occuper personnellement."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gradient mb-6">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-bronze-600 font-medium tracking-wider">
              Toutes les réponses à vos questions
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-champagne-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="fade-in">
                <div className="card-gradient rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-champagne-200">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/50 transition-colors duration-200"
                  >
                    <h3 className="font-playfair text-xl font-semibold text-bronze-800 pr-4">
                      {item.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp size={24} className="text-gold-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown size={24} className="text-gold-600 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-8 pb-6">
                      <div className="border-t border-champagne-300 pt-6">
                        <p className="text-charcoal-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-champagne-100 via-beige-100 to-bronze-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-6">
              Une Question ?
            </h2>
            <p className="text-xl text-charcoal-600">
              Notre équipe est là pour vous accompagner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-in text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-champagne-200">
                <div className="bg-gradient-to-br from-gold-500 to-bronze-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Phone size={32} className="text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-bronze-800 mb-4">
                  Téléphone
                </h3>
                <p className="text-charcoal-600 mb-4">
                  Appelez-nous pour un conseil personnalisé
                </p>
                <a href="tel:06XXXXXXXX" className="text-gold-600 font-medium hover:text-bronze-700 transition-colors">
                  06 XX XX XX XX
                </a>
              </div>
            </div>

            <div className="fade-in text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-champagne-200">
                <div className="bg-gradient-to-br from-champagne-500 to-gold-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Mail size={32} className="text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-bronze-800 mb-4">
                  Email
                </h3>
                <p className="text-charcoal-600 mb-4">
                  Écrivez-nous pour toute question
                </p>
                <a href="mailto:lacledutemps92@gmail.com" className="text-gold-600 font-medium hover:text-bronze-700 transition-colors">
                  lacledutemps92@gmail.com
                </a>
              </div>
            </div>

            <div className="fade-in text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-champagne-200">
                <div className="bg-gradient-to-br from-bronze-500 to-charcoal-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Globe size={32} className="text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-bronze-800 mb-4">
                  Site Web
                </h3>
                <p className="text-charcoal-600 mb-4">
                  Visitez notre site pour plus d'informations
                </p>
                <a href="https://www.lacledutemps.fr" className="text-gold-600 font-medium hover:text-bronze-700 transition-colors">
                  www.lacledutemps.fr
                </a>
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
              Prêt à nous confier votre bien ?
            </h2>
            <p className="text-xl text-cream-100 mb-8">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et personnalisée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-bronze-700 hover:bg-cream-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                Consultation gratuite
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-bronze-700 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;