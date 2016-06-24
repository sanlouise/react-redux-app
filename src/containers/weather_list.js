import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
	render() {
		return (

			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	//weather is defined in the combineRedicers method in reducers/index.js
	//key-value pair were equal, { weather: weather }
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);