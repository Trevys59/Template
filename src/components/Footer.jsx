import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-6">
      <div className="container mx-auto text-center space-y-4 px-6">
        <div>© {new Date().getFullYear()} Trevyss Sarrazyn. Tous droits réservés.</div>
        <div>
          <a href="/CVTrevysSarrazynDataEngineer.pdf" download className="mx-2 hover:underline">📄 Télécharger CV</a> |
          <a href="https://github.com/Trevys59" target="_blank" rel="noopener" className="mx-2 hover:underline">💻 GitHub</a> |
          <a href="https://www.linkedin.com/in/trevys-sarrazyn-2507551b1/" target="_blank" rel="noopener" className="mx-2 hover:underline">🔗 LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}