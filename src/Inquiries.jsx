import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const paperStyle = {
  height: '110%'
};

const containerStyle = {
  display: 'grid',
  marginLeft: '30%',
  marginRight: '30%',
  gridTemplateColumns: '1'
};

const contactStyle = {
  display: 'grid',
  marginLeft: '20%',
  marginRight: '20%',
  gridTemplateColumns: 'repeat(2,1fr)',
  gritTemplateRows: 6
};

const textFieldStyles = {
  borderRadius: '5px',
  backgroundColor: '#F0F8FF'
};

let bodyFieldStyles = {
  borderRadius: '5px',
  backgroundColor: '#F0F8FF',
  gridColumnStart: '1',
  gridColumnEnd: '3'
};

let buttonStyle = {
  gridColumnStart: 2,
  gridRowStart: 5
};

const InquiriesCard = () => (
  <div id="container" style={containerStyle}>
    <Paper style={paperStyle} zDepth={5}>
      <h1 style={{ textAlign: 'center', marginTop: '30px' }}>Email me</h1>
      <div id="contactGrid" style={contactStyle}>
        <h3>Email:</h3>
        <TextField
          hintText="Your Email Address"
          style={textFieldStyles}
          fullWidth={true}
        />
        <h3>Subject:</h3>
        <TextField
          hintText="Subject"
          style={textFieldStyles}
          fullWidth={true}
        />

        <TextField
          hintText="Message Body"
          id="messageBody"
          style={bodyFieldStyles}
          fullWidth={true}
          multiLine={true}
          rows={8}
        />
        <br />
        <RaisedButton label="Send" primary={true} style={buttonStyle} />
      </div>
    </Paper>
  </div>
);

export default InquiriesCard;
