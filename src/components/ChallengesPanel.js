require('normalize.css');
require('../styles/ChallengesPanel.css');

import React from 'react';
import ChallengeItem from './ChallengeItem'

class ChallengesPanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			challenges: [
				{ //CHALLENGE 0
					name: '30 days of LeanGains',
					description: 'Combines daily 16 hour fast/8 hour feed windows, macro cycling and weight lifting so you can be in your best shape ever.'
				},
				{ //CHALLENGE 1
					name: '30 days of LeanGains',
					description: 'Combines daily 16 hour fast/8 hour feed windows, macro cycling and weight lifting so you can be in your best shape ever.'
				},
				{ //CHALLENGE 2
					name: '30 days of LeanGains',
					description: 'Combines daily 16 hour fast/8 hour feed windows, macro cycling and weight lifting so you can be in your best shape ever.'
				},
				{ //CHALLENGE 3
					name: '30 days of LeanGains',
					description: 'Combines daily 16 hour fast/8 hour feed windows, macro cycling and weight lifting so you can be in your best shape ever.'
				}
			]
		};
	}


	render() {
		const challengeItems = this.state.challenges.map( (challenge) => {
			return <ChallengeItem challenge={challenge} />
		});

		return (
			<challenges-panel>
				{challengeItems}
			</challenges-panel>
		);
	}
}

export default ChallengesPanel;