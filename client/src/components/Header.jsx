import React from 'react';

const Header = (props) => {
  return(
    <header>
      <h1>Spacex Payload Viewer</h1>
      <nav>
        <ul>
          <li onClick={() => {props.setContentType('payload')}}>Payload Data</li>
          <li onClick={() => {props.setContentType('rocket')}}>Rocket Data</li>
        </ul>
      </nav>
    </header>
  );
}

export  default Header;
