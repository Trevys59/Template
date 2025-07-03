import React from 'react';
export default function Skills() {
  const categories = [
    {
      icon: 'storage',
      title: 'Admin Systèmes',
      items: [
        'Windows Server, Linux',
        'PowerShell, Bash',
        'DNS, DHCP, FTP',
        'Gestion utilisateurs',
        'SIEM (en cours)',
      ],
    },
    {
      icon: 'lan',
      title: 'Réseaux',
      items: ['TCP/IP, VPN', 'Cisco', 'Wireshark', 'VLAN', 'Haute dispo (en cours)'],
    },
    {
      icon: 'shield_lock',
      title: 'Sécurité',
      items: ['Pentests GreenBone', 'IDS/IPS', 'MFA, LDAP', 'Chiffrement', 'ISO 27001'],
    },
    {
      icon: 'cloud',
      title: 'Cloud',
      items: ['VMware, Hyper-V', 'Azure (début)', 'Docker', 'Terraform (en cours)'],
    },
    {
      icon: 'build',
      title: 'Supervision',
      items: ['Nagios (en cours)', 'Monitoring', 'DRP', 'Documentation'],
    },
    {
      icon: 'code',
      title: 'Dev & Auto',
      items: ['Python, JavaScript', 'Ansible (en cours)', 'HTML, CSS, PHP'],
    },
    {
      icon: 'chat',
      title: 'Transversales',
      items: ['Gestion de projets', 'Travail en équipe', 'Communication', 'Veille secu'],
    },
  ];
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8">Compétences</h2>
      <div className="grid md:grid-cols-3 gap-8 container mx-auto px-6">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
            <span className="material-symbols-outlined text-4xl">{cat.icon}</span>
            <h5 className="text-2xl font-semibold mt-4 mb-2">{cat.title}</h5>
            <ul className="list-disc list-inside space-y-1">
              {cat.items.map((it, k) => (
                <li key={k}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}