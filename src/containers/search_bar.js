import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
		//To ensure 'this' is referring to the right scope on onInputChange (around line 14)
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(e) {
	//The 'this' local method here is overwritten in the constructor
		this.setState({term: e.target.value});
	}

	onFormSubmit(e) {
		//Prevent that when user hits return it will submit the form
		e.preventDefault();
		//Fetch weather data
		this.props.fetchWeather(this.state.term);
		//Clear out search input
		this.setState({ term: ''});

	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
				placeholder="Retrieve the weather forecast"
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


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

//null is only passed in because mapDispatchToProps needs to be the 2nd argument.
export default connect(null, mapDispatchToProps)(SearchBar)

