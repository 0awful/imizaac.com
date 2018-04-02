import React from 'react';
import { Component } from 'react';
import ProjectCard from './ProjectCard';
import WriteupCard from './WriteupCard';
import InquiriesCard from './InquiriesCard';

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

const containerStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 2,
  width: '100vw',
  height: '100vh',
  display: 'grid',
  paddingTop: '7%',
  paddingLeft: '30%',
  paddingRight: '30%',
  paddingBottom: '20%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  gridTemplateColumns: '1'
};

const InquiriesStyle = {
  width: '70%',
  display: 'block',
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
    console.log('clicked');
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

    if (this.props.inquiresOpen && this.state.writeupDisplayed) {
      this.toggleWriteupDisplay();
    }

    if (this.props.inquiriesOpen) {
      return (
        <div>
          <div id="container" style={containerStyle}>
            <InquiriesCard
              style={InquiriesStyle}
              backButton={this.props.toggleInquiries}
            />
          </div>
          {this.returnProjects()}
        </div>
      );
    }

    if (this.state.writeupDisplayed) {
      return (
        <div>
          {this.returnProjects()}
          <div id="container" style={containerStyle}>
            <WriteupCard
              cardStyles={writeupStyleVisible}
              backButton={this.toggleWriteupDisplay.bind(this)}
              {...project}
            />
          </div>
        </div>
      );
    }
    return <div>{this.returnProjects()}</div>;
  };
}
export default Projects;
