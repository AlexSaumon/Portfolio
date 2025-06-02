import React from 'react';
import '../Styles/Projet.scss'
import projectData from '../Data/Project.json';

function Project() {
  const sortedProjects = [...projectData].sort((a, b) => {
    const dateA = new Date(a.date.split('/').reverse().join('-'));
    const dateB = new Date(b.date.split('/').reverse().join('-'));
    return dateB - dateA;
  });

  return (
    <section className="projet-body">
      {sortedProjects.map((project, index) => (
        <div className="projet" key={index}>
          <img 
            src={`/picture/${project.cover}`}
            alt={project.title} 
            className="projet-pic"
          />
          <div className="projet-description">
            <h3>{project.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: project.description }} />
            <div className='projet-footer'>
                <div className="tags">
              {project.tags.map((tag, idx) => (
                <span className="tag" key={idx}>{tag}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="Button">
              GitHub
            </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Project;
