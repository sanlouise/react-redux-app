import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER;
		//An array because we have multiple cities to show and data as defined by API.. checked in console
		//We can't use state.push, we can't directly change the data in state from the reducer
		// Concat creates a new array with all old and new data in there.
		// return state.concat([action.payload.data]); this would work
		return [ action.payload.data, ...state ];
	}
	return state;
}