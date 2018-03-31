import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

const cardStyles = {
  position: 'relative',
  //  width: '30%',
  minWidth: '400px',
  maxWidth: '400px',
  //  height: '40%',
  minHeight: '500px',
  maxHeight: '500px',
  float: 'left',
  margin: '1%'
};

const toolbarStyles = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  justifyContent: 'flex-start'
};

const groupStyles = {
  width: '27%',
  marginLeft: '.5%',
  marginRight: '2%',
  padding: '0px'
};

const ProjectCard = props => {
  let writeupButtonFunction = () => {
    props.setId(props.id);
    props.writeupFunction();
  };
  return (
    <Card style={cardStyles} zDepth={2}>
      <CardTitle title={props.title} subtitle={props.subtitle} />

      <CardMedia />
      <CardText>
        {props.description}
        <Toolbar style={toolbarStyles}>
          <ToolbarGroup firstChild={true} style={groupStyles}>
            <RaisedButton
              label="Writeup"
              primary={true}
              fullWidth={true}
              onClick={writeupButtonFunction}
            />
          </ToolbarGroup>

          <ToolbarGroup style={groupStyles}>
            <RaisedButton
              label="Code"
              primary={true}
              fullWidth={true}
              onClick={() => {
                window.location.href = props.codeurl;
              }}
            />
          </ToolbarGroup>
          <ToolbarGroup lastChild={true} style={groupStyles}>
            <RaisedButton
              label="Project"
              primary={true}
              fullWidth={true}
              onClick={() => {
                window.location.href = props.projecturl;
              }}
            />
          </ToolbarGroup>
        </Toolbar>
      </CardText>
    </Card>
  );
};

export default ProjectCard;
