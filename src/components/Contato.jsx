import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Contato() {
  return (
    <section id="contato" className="mb-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contato</h2>
      <div className="flex gap-6 justify-center items-center mt-4">
        <a href="mailto:matheustorres00@gmail.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex justify-center items-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
          <FaEnvelope size={24} color="#0366d6" />
        </a>
        <a href="https://www.linkedin.com/in/matheus-torres-352123a1/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex justify-center items-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
          <FaLinkedin size={24} color="#0366d6" />
        </a>
      </div>
    </section>
  );
}

export default Contato;
