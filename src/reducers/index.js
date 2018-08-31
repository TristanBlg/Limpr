import {combineReducers} from 'redux'
import {fullScreen} from './ReducerControl'
import {posts} from './ReducerPost'
import {user} from './ReducerUsers'
import {nowPlaying} from './ReducerSongs'

const reducers = combineReducers({
  fullScreen,
  nowPlaying,
  posts,
  user,
})

export default reducers