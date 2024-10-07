import React from 'react';
import projetos from './projetosData';

function Projetos() {
  return (
    <section id="projetos" className="mb-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Meus Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projetos.map((projeto, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">{projeto.titulo}</h3>
            <p className="text-gray-700">{projeto.descricao}</p>
            {projeto.link && (
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Saiba mais
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
