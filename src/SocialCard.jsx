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

const SocialCard = props => {
  return (
    <Card style={cardStyles} zDepth={2}>
      <CardTitle title={props.title} />

      <CardMedia />
      <CardText>
        <Toolbar style={toolbarStyles}>
          <ToolbarGroup firstChild={true} lastChild={true} style={groupStyles}>
            <RaisedButton
              label="Visit"
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
};

export default SocialCard;
