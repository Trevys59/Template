import React from 'react';
export default function About() {
  return (
    <section id="about" className="py-16 container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-8">À propos de moi</h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        <img
          src="/portrait.jpg"
          alt="Photo de Trevyss Sarrazyn"
          className="w-40 h-40 rounded-full object-cover mb-6 md:mb-0 mx-auto"
        />
        <div className="max-w-2xl text-lg leading-relaxed">
          <p>
            Étudiant en administration d'infrastructures sécurisées, en quête d'une alternance pour mettre mes
            compétences en cybersécurité et administration système au service d'expériences fiables.
          </p>
          <p className="italic mt-4">
            Passionné par la sécurité informatique, ma rigueur et mon expérience de coach m'animent pour tisser des
            systèmes robustes et conviviaux.
          </p>
        </div>
      </div>
      {/* Centres d'intérêts */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-center mb-6">Centres d'intérêts</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: 'security', label: 'Cybersécurité' },
            { icon: 'sports_martial_arts', label: 'Taekwondo' },
            { icon: 'travel_explore', label: 'Voyage' },
            { icon: 'groups', label: 'Animation' },
            { icon: 'restaurant_menu', label: 'Cuisiner' },
            { icon: 'code', label: 'Programmation' },
          ].map((item, i) => (
            <div key={i}>
              <span className="material-symbols-outlined text-4xl">{item.icon}</span>
              <p className="mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}