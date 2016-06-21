import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
		//To ensure 'this' is referring to the right scope on onInputChange (around line 14)
		this.onInputChange = this.onInputChange.bind(this);
	}

	onFormSubmit(event) {
		//Prevent that when user hits return it will submit the form
		event.preventDefault();

		//Fetch weather data
		
	}

	onInputChange(event) {
		console.log(event.target.value);
		//The 'this' local method here is overwritten in the constructor
		this.setState({term: event.target.value});
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
				placeholder="Retrieve the weather-forecast"
				className="form-control"
				value={this.state.term}
				onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Search</button>
				</span>
			</form>
		);
	}
}