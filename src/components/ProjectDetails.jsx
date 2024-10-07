import React from 'react';
import { useParams } from 'react-router-dom';
import projetosData from './projetosData'; // Importando os dados dos projetos

const ProjectDetails = () => {
  const { id } = useParams(); // Obtendo o ID do projeto da URL
  const project = projetosData.find((proj) => proj.id === parseInt(id)); // Encontrando o projeto correspondente

  if (!project) {
    return <div className="p-5">Projeto não encontrado.</div>; // Mensagem caso o projeto não seja encontrado
  }

  return (
    <div className="p-5 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <img src={project.image} alt={project.name} className="mb-4 rounded-lg w-full h-64 object-cover" />
      <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <h2 className="text-2xl font-semibold mb-2">Detalhes Adicionais</h2>
      <p className="text-gray-600 mb-2">{project.details}</p>
      <p className="text-gray-600 mb-2"><strong>Tecnologias Utilizadas:</strong> {project.technologies}</p>
      <p className="text-gray-600 mb-2">
        <strong>Repositório:</strong> <a href={project.repositoryLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{project.repositoryLink}</a>
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Demonstração:</strong> <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{project.demoLink}</a>
      </p>
    </div>
  );
};

export default ProjectDetails;
