import React from 'react';

const style = {
  height: 40,
  width: 40,
  margin: 10,
  backgroundColor: 'ffffff',
  textAlign: 'center',
  display: 'inline-block'
};

const EmailIcon = props => (
  <div style={style}>
    <a href="#" onClick={props.click}>
      <svg
        height="50"
        width="50"
        viewBox="0 0 16 16"
        version="1.1"
        fill={props.fill}
        aria-hidden="true">
        <path
          d="M7,9L5.268,7.484l-4.952,4.245C0.496,11.896,0.739,12,1.007,12h11.986    c0.267,0,0.509-0.104,0.688-0.271L8.732,7.484L7,9z"
          fill="#FFFFFF"
        />
        <path
          d="M13.684,2.271C13.504,2.103,13.262,2,12.993,2H1.007C0.74,2,0.498,2.104,0.318,2.273L7,8    L13.684,2.271z"
          fill="#FFFFFF"
        />
        <polygon points="0,2.878 0,11.186 4.833,7.079   " fill="#FFFFFF" />
        <polygon points="9.167,7.079 14,11.186 14,2.875   " fill="#FFFFFF" />
      </svg>
    </a>
  </div>
);

export default EmailIcon;
