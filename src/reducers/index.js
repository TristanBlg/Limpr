import {combineReducers} from 'redux'
import types from '../actions/ActionTypes'

const fullScreen = (state = false, action) => {
	switch(action.type){
		case types.toggleFullScreen:
			return !state
		default:
			return state
	}
}

const isPlaying = (state = false, action) => {
	switch(action.type){
		case types.togglePlaying:
			return !state
		default:
			return state
	}
}

const nowPlaying = (state = {
	title: "Title",
	author: "Author",
}, action) => {
	switch(action.type){
		case types.setNowPlaying:
			return {
				title: action.title,
				author: action.author,
			}
		default:
			return state
	}
}

const reducers = combineReducers({
	fullScreen,
	isPlaying,
	nowPlaying,
})

export default reducers