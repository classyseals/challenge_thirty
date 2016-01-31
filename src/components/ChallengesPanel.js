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
							30 days of LeanGains
						</name>
						<description>
							Combines daily 16 hour fast/8 hour feed windows, macro cycling and
							weight lifting so you can be in your best shape ever.
						</description>
						<difficulty-bar></difficulty-bar>
					</challenge-details>
				</challenge>
				<challenge>
					<challenge-image>
					</challenge-image>
					<challenge-details>
						<name>
							30 days of LeanGains
						</name>
						<description>
							Combines daily 16 hour fast/8 hour feed windows, macro cycling and
							weight lifting so you can be in your best shape ever.
						</description>
						<difficulty-bar></difficulty-bar>
					</challenge-details>
				</challenge>
				<challenge>
					<challenge-image>
					</challenge-image>
					<challenge-details>
						<name>
							30 days of LeanGains
						</name>
						<description>
							Combines daily 16 hour fast/8 hour feed windows, macro cycling and
							weight lifting so you can be in your best shape ever.
						</description>
						<difficulty-bar></difficulty-bar>
					</challenge-details>
				</challenge>
				<challenge>
					<challenge-image>
					</challenge-image>
					<challenge-details>
						<name>
							30 days of LeanGains
						</name>
						<description>
							Combines daily 16 hour fast/8 hour feed windows, macro cycling and
							weight lifting so you can be in your best shape ever.
						</description>
						<difficulty-bar></difficulty-bar>
					</challenge-details>
				</challenge>
			</challenges-panel>
		);
	}
}

export default ChallengesPanel;