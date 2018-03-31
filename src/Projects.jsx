import React from 'react';
import { Component } from 'react';
import ProjectCard from './ProjectCard.jsx';
import WriteupCard from './WriteupCard.jsx';

const writeupStyleVisible = {
  width: '70%',
  display: 'block',
  height: '80%',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

const writeupStyleInvisible = {
  width: '70%',
  display: 'none',
  height: '80%',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

class Projects extends Component {
  state = {
    writeupDisplayed: false,
    writeupId: ''
  };

  toggleWriteupDisplay() {
    if (this.state.writeupDisplayed) {
      this.setState({ writeupDisplayed: false });
    } else {
      this.setState({ writeupDisplayed: true });
    }
  }

  setWriteupId(id) {
    this.setState({ writeupId: id });
  }

  returnProjects = () => (
    <div id="projectGrid">
      {this.props.projects.map(project => (
        <ProjectCard
          key={project.id}
          setId={this.setWriteupId.bind(this)}
          writeupFunction={this.toggleWriteupDisplay.bind(this)}
          {...project}
        />
      ))}
    </div>
  );

  render = () => {
    let project;
    if (this.state.writeupId === '') {
      project = this.props.projects[0];
    } else {
      project = this.props.projects.find(
        project => project.id === this.state.writeupId
      );
    }
    let writeupStyle;
    if (this.state.writeupDisplayed) {
      writeupStyle = writeupStyleVisible;
    } else {
      writeupStyle = writeupStyleInvisible;
    }
    return (
      <div>
        {this.returnProjects()}

        <WriteupCard
          cardStyles={writeupStyle}
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          writeup={project.writeup}
          projecturl={project.url}
          codeurl={project.codeurl}
          backButton={this.toggleWriteupDisplay.bind(this)}
        />
      </div>
    );
  };
}
export default Projects;
