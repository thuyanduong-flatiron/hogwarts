import React from 'react'

const HogDetails = ({ hog }) => {
	const { greased, weight } = hog
	const medal = hog['highest medal achieved']

	return (
		<div className="description">
      <p>
			   <strong>{greased ? 'Greased' : 'Nongreased'}</strong>
      </p>
			<p>
				Highest medal achived: <strong>{medal}</strong>
			</p>
			<p>
				Weight: <strong>{weight}</strong>
			</p>
		</div>
	)
}

export default HogDetails
