import React, { useState, useEffect } from 'react';
export default function Navbar() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-primary">Trevyss Arrazyn</div>
        <ul className="hidden md:flex space-x-6 text-lg">
          {['about','education','experience','skills','projects','contact'].map(sec => (
            <li key={sec}>
              <a href={`#${sec}`} className="hover:text-accent capitalize">
                {sec}
              </a>
            </li>
          ))}
          <li className="flex items-center">
            <button
              onClick={() => setDark(!dark)}
              className="material-symbols-outlined text-xl focus:outline-none"
            >
              {dark ? 'light_mode' : 'dark_mode'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}