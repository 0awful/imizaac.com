import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

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

const WriteupCard = props => (
  <Card style={props.cardStyles} zDepth={3}>
    <CardTitle title={props.title} subtitle={props.subtitle} />

    <CardMedia />
    <CardText>
      <h2>Description:</h2>
      {props.description}
      <h2>Writeup:</h2>
      {props.writeup}
      <Toolbar style={toolbarStyles}>
        <ToolbarGroup firstChild={true} style={groupStyles}>
          <RaisedButton
            label="Back"
            primary={true}
            fullWidth={true}
            onClick={props.backButton}
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
              window.location.href = props.url;
            }}
          />
        </ToolbarGroup>
      </Toolbar>
    </CardText>
  </Card>
);

export default WriteupCard;
