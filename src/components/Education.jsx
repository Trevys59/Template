import React from 'react';
export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Parcours scolaire</h2>
        <ul className="space-y-8">
          <li>
            <h5 className="text-2xl font-semibold">AIS - Simplon</h5>
            <p>2024 - 2025 (en cours)</p>
          </li>
          <li>
            <h5 className="text-2xl font-semibold">BTS SNIR - Lycée César Baggio</h5>
            <p>2022 - 2024</p>
          </li>
          <li>
            <h5 className="text-2xl font-semibold">Baccalauréat Général - Lycée César Baggio</h5>
            <p>2019 - 2022</p>
          </li>
        </ul>
      </div>
    </section>
  );
}