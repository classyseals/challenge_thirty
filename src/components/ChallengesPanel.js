require('normalize.css');
require('../styles/ChallengesPanel.css');

import React from 'react';

class ChallengesPanel extends React.Component {
	render() {
		return (
			<challenges-panel>
				<challenge>
					<challenge-image>
					</challenge-image>
					<challenge-details>
						<name>
							G-RO: Revolutionary Carry on Luggage
						</name>
						<description>
							The worlds best carry-on luggage - its patented "all-terrain" wheels change EVERYTHING!
						</description>
						<difficulty-bar></difficulty-bar>
					</challenge-details>
				</challenge>
			</challenges-panel>
		);
	}
}

export default ChallengesPanel;