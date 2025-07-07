import React from 'react';

const securityServices = [
  {
    title: 'Web Application Penetration Testing',
    description:
      'Identify vulnerabilities in web apps using OWASP Top 10 methodologies and exploit testing.',
    border: 'border-pink-500'
  },
  {
    title: 'Database Security Audit',
    description:
      'Protect sensitive information by auditing MySQL, MongoDB, and PostgreSQL database configurations.',
    border: 'border-purple-500'
  },
  {
    title: 'Malware & Ransomware Detection',
    description:
      'Deploy real-time anti-malware engines and file scanning to prevent breaches before they occur.',
    border: 'border-red-500'
  },
  {
    title: 'Network Security Monitoring',
    description:
      'Track traffic, ports, and unauthorized access in real-time using IDS/IPS solutions like Snort and Suricata.',
    border: 'border-blue-500'
  },
  {
    title: 'Cloud Security (AWS/Azure)',
    description:
      'Audit cloud workloads and enforce IAM, encryption, and access policies for top-tier protection.',
    border: 'border-indigo-500'
  },
  {
    title: 'API Security Testing',
    description:
      'Scan and test your public/private APIs for vulnerabilities like injection, auth bypass, and rate abuse.',
    border: 'border-cyan-500'
  }
];

const SecurityCatalog = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6 py-16 text-white">
      {/* Aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-700 via-pink-600 to-red-500 opacity-20 blur-3xl animate-pulse z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          Cybersecurity Services Catalog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityServices.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-6 rounded-xl border-l-4 shadow-lg ${service.border} transition-transform hover:scale-[1.02]`}
            >
              <h2 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h2>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityCatalog;
