import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { Redirect } from 'react-router';

const Header = (props: { left: Function, title: Function }) => {
  return (
    <div>
      <AppBar
        zDepth={3}
        style={{ position: 'fixed' }}
        title="ImIzaac"
        onLeftIconButtonClick={props.left}
        onTitleClick={props.title}
      />
      <Toolbar />
    </div>
  );
  {
    /* <Link to="/Projects">Projects </Link>*/
  }

  {
    /* <Link to="/Social">Social </Link>*/
  }

  {
    /* <Link to="/Inquiries">Inquiries</Link> */
  }
};

export default Header;
