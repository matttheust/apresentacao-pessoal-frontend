import React from 'react';
import { Link } from 'react-router-dom';
import projetosData from '../components/projetosData'; // Importando os dados dos projetos


const Projetos = () => {
  const projects = projetosData; // Usando os dados importados

  return (
    <div className="my-5">
      <h2 className="text-2xl font-bold mb-4">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id} className="block p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="card-content">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projetos;
