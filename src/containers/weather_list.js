import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

	renderWeather(cityData) {
		const name = cityData.city.name
		//Here we get a plain array of temperatures, as needed to create the charts
		const temperatures = cityData.list.map(weather => weather.main.temp)
		// const pressure = cityData.list.map(weather => weather.main.)

		return (
			<tr key={name}>
				<td>{name}</td>
				<td>
					<Chart data ={temperatures} color="red" />
				</td>
			</tr>
		);
	}

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
					{this.props.weather.map(this.renderWeather)}
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