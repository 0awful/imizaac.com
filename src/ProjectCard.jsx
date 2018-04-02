import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

const cardStyles = {
  position: 'relative',

  minWidth: '400px',
  maxWidth: '32%',
  minHeight: '500px',
  maxHeight: '500px',

  marginBottom: '15px'
};

const toolbarStyles = {
  position: 'absolute',
  display: 'grid',
  paddingTop: '2%',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridTemplateRows: 1,
  gridColumnGap: '2%',
  justifyContent: 'center',
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
          <RaisedButton
            label="Writeup"
            primary={true}
            fullWidth={true}
            onClick={writeupButtonFunction}
          />
          <RaisedButton
            label="Code"
            primary={true}
            fullWidth={true}
            onClick={() => {
              window.location.href = props.codeurl;
            }}
          />
          <RaisedButton
            label="Project"
            primary={true}
            fullWidth={true}
            onClick={() => {
              window.location.href = props.projecturl;
            }}
          />
        </Toolbar>
      </CardText>
    </Card>
  );
};

export default ProjectCard;
