import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams(); // Obtendo o ID do projeto da URL

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Detalhes do Projeto {id}</h1>
      {/* Aqui você pode adicionar mais informações sobre o projeto */}
      <p className="text-gray-700">Aqui estão os detalhes do projeto {id}.</p>
    </div>
  );
};

export default ProjectDetails;
