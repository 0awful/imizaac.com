import React from 'react';
import ProjectCard from './ProjectCard.jsx';

let title = 'title';
let subtitle = 'subtitle';
let description = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`;

const style = {
  paddingTop: '2%',
  paddingLeft: '3%',
  paddingRight: '3%',
  alignItems: 'center',
  justifyContent: 'center'
};

const Projects = () => (
  <div style={style}>
    <ProjectCard title={title} subtitle={subtitle} description={description} />
    <ProjectCard title={title} subtitle={subtitle} description={description} />
    <ProjectCard title={title} subtitle={subtitle} description={description} />
    <ProjectCard title={title} subtitle={subtitle} description={description} />
    <ProjectCard title={title} subtitle={subtitle} description={description} />
  </div>
);

export default Projects;
