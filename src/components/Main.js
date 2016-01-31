require('normalize.css');
require('styles/App.css');

import React from 'react';
import ChallengesPanel from './ChallengesPanel';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
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
