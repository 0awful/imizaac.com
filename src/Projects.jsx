import React from 'react';
import { Component } from 'react';
import ProjectCard from './ProjectCard.jsx';
import WriteupCard from './WriteupCard.jsx';

const style = {
  paddingTop: '1%',
  paddingLeft: '3%',
  paddingRight: '3%',
  alignItems: 'center',
  justifyContent: 'center'
};

class Projects extends Component {
  state = {
    writeupDisplayed: false,
    writeupId: 'idnumber6'
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
    <div style={style}>
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
    if (this.state.writeupDisplayed) {
      let project = this.props.projects.find(
        project => project.id === this.state.writeupId
      );

      return (
        <div style={style}>
          {this.returnProjects()}

          <WriteupCard
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
    } else {
      return this.returnProjects();
    }
  };
}
export default Projects;
