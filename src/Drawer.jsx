import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

const undoLinkStyling = {
  textDecoration: 'none',
  color: 'inherit'
};

const sideDrawer = props => (
  <div>
    <Drawer
      zDepth={4}
      docked={false}
      onClick={props.toggle}
      open={props.open}
      onRequestChange={props.toggle}>
      <MenuItem onClick={props.toggle}>
        <h2>
          <em>Close Drawer</em>
        </h2>
      </MenuItem>

      <MenuItem onClick={props.toggle}>
        <Link to="/" style={undoLinkStyling}>
          <h2>Home</h2>
        </Link>
      </MenuItem>
      <MenuItem onClick={props.toggle}>
        <Link to="/projects" style={undoLinkStyling}>
          <h2>Projects</h2>
        </Link>
      </MenuItem>
      <MenuItem onClick={props.toggle}>
        <Link to="/writeups" style={undoLinkStyling}>
          <h2>Writeups</h2>
        </Link>
      </MenuItem>
      <MenuItem onClick={props.toggle}>
        <Link to="/code" style={undoLinkStyling}>
          <h2>Code</h2>
        </Link>
      </MenuItem>
      <MenuItem onClick={props.toggle}>
        <Link to="/social" style={undoLinkStyling}>
          <h2>Social</h2>
        </Link>
      </MenuItem>
      <MenuItem onClick={props.toggle}>
        <Link to="/inquiries" style={undoLinkStyling}>
          <h2>Inquires</h2>
        </Link>
      </MenuItem>
    </Drawer>
  </div>
);

export default sideDrawer;
