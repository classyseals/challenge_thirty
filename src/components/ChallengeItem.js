import React from 'react';

const ChallengeItem = (props) => {
	return (
		<challenge>
			<challenge-image></challenge-image>
			<challenge-details>
				<name>
					{props.challenge.name}
				</name>
				<description>
					{props.challenge.description}
				</description>
				<difficulty-bar></difficulty-bar>
			</challenge-details>
		</challenge>
	);
};

export default ChallengeItem;