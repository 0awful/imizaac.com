import React from 'react';

const style = {
  textAlign: 'center',
  position: 'absolute',
  left: '45%',
  right: '45%',
  top: '30%'
};

const NotFound = () => (
  <div style={style}>
    <h1>Page not found</h1>
    <a href="https://xkcd.com/1969/">Relevant XKCD</a>
  </div>
);

export default NotFound;
