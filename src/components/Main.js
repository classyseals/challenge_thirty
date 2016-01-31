require('normalize.css');
require('styles/App.css');

import React from 'react';
import ChallengesPanel from './ChallengesPanel';
import Navbar from './Navbar';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    console.log(this.props.children);
    return (
      <div className="index">
      	<Navbar />
        <img src="http://i.imgur.com/nz6bluK.jpg" alt="Yeoman Generator" />
        <div className="notice"> Welcome! Choose a challenge bellow:</div>
        <panel-container>
        	<ChallengesPanel />
        </panel-container>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
