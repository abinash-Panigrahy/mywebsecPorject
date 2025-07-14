import React from 'react';

const About = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen text-white px-6 py-16">
      {/* Aura effect */}
      <div className="absolute inset-0 z-0 blur-3xl opacity-20 bg-gradient-to-tr from-purple-600 via-pink-500 to-red-500"></div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          About Us
        </h1>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg border border-purple-700">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed">
            Wesafe is a modern tech firm offering world-class web development and cybersecurity solutions. 
            Our mission is to provide secure, scalable, and innovative web products to help businesses thrive in the digital age.
          </p>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg border border-pink-600">
          <h2 className="text-2xl font-bold mb-4 text-pink-400">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            We envision a world where security and creativity go hand in hand. With a focus on ethical hacking, 
            secure web architecture, and client-first development, our solutions are built to stand the test of both scale and threats.
          </p>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg border border-indigo-600">
          <h2 className="text-2xl font-bold mb-4 text-indigo-400">Why Choose Us?</h2>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>✔️ Industry-grade Web App Development</li>
            <li>✔️ Penetration Testing & Cybersecurity Audits</li>
            <li>✔️ Database, API, and Network Security Solutions</li>
            <li>✔️ 24/7 Support & Consulting</li>
            <li>✔️ Transparent, Agile Project Management</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
