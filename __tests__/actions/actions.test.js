import * as actions from '../../src/actions'
import types from '../../src/actions/ActionTypes'

describe('Actions', () => {
  it('set a song to now playing', () => {
    const song = {
      "id": 0,
      "user": "user",
      "title": "title",
      "duration": 1,
      "source": "/source.mp3",
      "thumbnail": "/thumbnail.jpg"
    }
    const expectedActions = {
      type: types.setNowPlaying,
      song
    }
    expect(actions.setNowPlayingToAction(song)).toEqual(expectedActions)
  })
})