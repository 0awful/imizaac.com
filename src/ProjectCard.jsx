import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar';
import Tabs from 'material-ui/Tabs';

const cardStyles = {
  display: 'inline-block',
  position: 'relative',
  width: '30%',
  minWidth: '400px',
  height: '40%',
  minHeight: '500px',
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

const ProjectCard = props => (
  <Card style={cardStyles} zDepth={2}>
    <CardTitle title={props.title} subtitle={props.subtitle} />

    <CardMedia />
    <CardText>
      {props.description}
      <Toolbar style={toolbarStyles}>
        <ToolbarGroup firstChild={true} style={groupStyles}>
          <RaisedButton label="Code" primary={true} fullWidth={true} />
        </ToolbarGroup>

        <ToolbarGroup style={groupStyles}>
          <RaisedButton label="Writeup" primary={true} fullWidth={true} />
        </ToolbarGroup>
        <ToolbarGroup lastChild={true} style={groupStyles}>
          <RaisedButton label="Project" primary={true} fullWidth={true} />
        </ToolbarGroup>
      </Toolbar>*/
    </CardText>

    {/*  <CardActions>
      <FlatButton label="Action!" />
      <FlatButton label="Action!" />
      <FlatButton label="Action!" />
    </CardActions>


    <Toolbar style={toolbarStyles}>
      <ToolbarGroup firstChild={true}>
        <RaisedButton label="Code" primary={true} />
      </ToolbarGroup>

      <ToolbarGroup>
        <RaisedButton label="Writeup" primary={true} />
      </ToolbarGroup>
      <ToolbarGroup lastChild={true}>
        <RaisedButton label="Project" primary={true} />
      </ToolbarGroup>
    </Toolbar>*/}
  </Card>
);

export default ProjectCard;
