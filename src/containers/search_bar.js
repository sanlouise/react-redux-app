import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			searchTerm: '' 
		};

	}

	onInputChange = (e) => {
		this.setState({
			searchTerm: e.target.value
		});
	}

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.fetchWeather(this.state.searchTerm);
		this.setState({ searchTerm: ''});
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
				placeholder="Retrieve the weather forecast"
				className="form-control"
				value={this.state.searchTerm}
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

export default connect(null, mapDispatchToProps)(SearchBar)

