import React from 'react';

const homeTextStyle = {
  position: 'absolute',
  marginRight: '50%',
  marginLeft: '50%',
  top: '30%',
  fontSize: '64px'
};

const holderDiv = {
  width: '100vf'
};

const Home = () => (
  <div style={holderDiv}>
    <h1 style={homeTextStyle}>Hey, I'm Izaac</h1>
  </div>
);
export default Home;
