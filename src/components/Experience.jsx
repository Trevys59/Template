import React from 'react';
export default function Experience() {
  const professional = [
    {
      title: "Stage - Administrateur d'Infrastructures Sécurisées",
      period: '06/2025 - 09/2025',
      tasks: ['Virtualisation', 'Sécurité informatique', 'Architecture réseau', 'Administration système'],
    },
    {
      title: 'Stage - Développeur Web',
      period: '05/2023 - 07/2023',
      tasks: ['Cahier des Charges', 'Développement', 'Gestion de Projet', 'Tests', 'Finalisation'],
    },
  ];
  const assoc = [
    {
      title: 'Ecole de Taekwondo Monsoise',
      period: '09/2022 - présent',
      desc: `Entraîneur pour tous les âges, coach en compétition, création de référentiels et supports administratifs.`, 
    },
    {
      title: 'Les dimanches du Baroeul - Mairie de Mons-en-Baroeul',
      period: '07/2023 - 08/2023',
      desc: `Affiches, tickets numériques, installation et animation d'événements, cinéma en plein air.`,    
    },
  ];
  return (
    <section id="experience" className="py-16 container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Expériences</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Professionnelles</h3>
          {professional.map((exp, i) => (
            <div key={i} className="mb-6">
              <h5 className="text-xl font-medium">{exp.title}</h5>
              <p className="italic">{exp.period}</p>
              <ul className="list-disc list-inside mt-2">
                {exp.tasks.map((t,k)=><li key={k}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Associatives</h3>
          {assoc.map((exp, i) => (
            <div key={i} className="mb-6">
              <h5 className="text-xl font-medium">{exp.title}</h5>
              <p className="italic">{exp.period}</p>
              <p className="mt-2">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}