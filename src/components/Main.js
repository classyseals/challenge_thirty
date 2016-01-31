require('normalize.css');
require('styles/App.css');

import React from 'react';
import Navbar from './Navbar';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Navbar />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
