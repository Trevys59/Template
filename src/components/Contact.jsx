import React from 'react';
export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-12">
        <a href="tel:+33766447819" className="flex flex-col items-center">
          <span className="material-symbols-outlined text-4xl">call</span>
          <p className="mt-2">+33 7 66 44 78 19</p>
        </a>
        <a href="mailto:trevys.sarrazyn@gmail.com" className="flex flex-col items-center">
          <span className="material-symbols-outlined text-4xl">mail</span>
          <p className="mt-2">trevys.sarrazyn@gmail.com</p>
        </a>
        <a href="https://www.linkedin.com/in/trevys-sarrazyn-2507551b1/" target="_blank" className="flex flex-col items-center">
          <span className="material-symbols-outlined text-4xl">person</span>
          <p className="mt-2">LinkedIn</p>
        </a>
      </div>
      <form className="max-w-xl mx-auto space-y-6" action="mailto:trevys.sarrazyn@gmail.com" method="POST" encType="text/plain">
        <div>
          <label className="block mb-2 font-medium" htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required className="w-full p-3 border rounded-lg" placeholder="Votre nom" />
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required className="w-full p-3 border rounded-lg" placeholder="Votre email" />
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required className="w-full p-3 border rounded-lg" placeholder="Votre message"></textarea>
        </div>
        <button type="submit" className="w-full py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-opacity-90 transition">
          Envoyer
        </button>
      </form>
    </section>
  );
}