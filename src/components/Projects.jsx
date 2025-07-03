import React from 'react';
const data = [
  {
    img: '/blc.png',
    title: 'Cookie Cliquer',
    text: "Cookie clicker sur le thème du manga Blue Lock.",
    link: '/blc',
  },
  {
    img: '/WordPresslogo.png',
    title: "Site Web Association",
    text: 'Vitrine et boutique pour une association sportive.',
    link: '#',
  },
  {
    img: '/PontsLinksBanniere.png',
    title: 'Ponts Connectés',
    text: 'Resa mobile avec API RESTful et capteurs LoRaWAN.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Projets</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {data.map((proj, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h5 className="text-2xl font-semibold mb-2">{proj.title}</h5>
              <p className="mb-4">{proj.text}</p>
              <a href={proj.link} className="text-primary font-medium hover:underline">
                Voir plus →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}