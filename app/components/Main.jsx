'use strict';

let React = require('react'),
    Nav = require('Nav');

let Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav />
          <p>Main.jsx rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
