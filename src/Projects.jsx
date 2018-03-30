import React from 'react';
import ProjectCard from './ProjectCard.jsx';

const style = {
  paddingTop: '2%',
  paddingLeft: '3%',
  paddingRight: '3%',
  alignItems: 'center',
  justifyContent: 'center'
};

const Projects = props => {
  console.log('project props', props);
  console.log('project maps', props.projects);
  return (
    <div style={style}>
      {props.projects.map(project => (
        <ProjectCard
          title={project.title}
          subtitle={project.id}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default Projects;
