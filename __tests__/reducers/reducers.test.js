import {fullScreen} from '../../src/reducers/ReducerControl'
import {nowPlaying} from '../../src/reducers/ReducerSongs'
import types from '../../src/actions/ActionTypes'

describe('Reducers', () => {
  it('should toggle full screen', () => {
    expect(
      fullScreen(false, {
        type: types.toggleFullScreen
      })
    ).toEqual(true)
  })
  
  it('set a new song to now playing', () => {
    expect(
      nowPlaying({
          id: 0,
          title: 'Title 1',
          user: 'User 1',
          play: false,
          source: './song1',
          thumbnail: './thumbnail2',
          currentTime: '00:01:00',
          duration: '00:01:00'
        }, {
        type: types.setNowPlaying,
        song: {
          id: 1,
          title: 'Title 2',
          user: 'User 2',
          play: true,
          source: './song2',
          thumbnail: './thumbnail2',
          currentTime: '00:02:00',
          duration: '00:02:00'
        }
      })
    ).toEqual(
      {
        id: 1,
        title: 'Title 2',
        user: 'User 2',
        play: true,
        source: './song2',
        thumbnail: './thumbnail2',
        currentTime: '00:02:00',
        duration: '00:02:00'
      }
    )
  })
})
