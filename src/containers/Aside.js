import * as React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Logo from '../components/Logo'
import List from '../components/List'
import Player from '../components/Player'

const Aside = (props) => {
  const {fullScreen} = props

  return (
    <StyledAside fullScreen={fullScreen}>
      <Logo/>
      <Player/>
      {!fullScreen && (
        <React.Fragment>
          <List title="Playlists" items={playlists} />
          <List title="Suggestions" items={suggestions} />
        </React.Fragment>
      )}
    </StyledAside>
  )
}

const StyledAside = styled.aside `
  width: ${(props) => props.fullScreen ? '100%' : '335px'};
  transition: width .4s ease-in-out;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-right: 1px solid #e0e0e0;
`

const mapStateToProps = (state) => {
  return {
    fullScreen: state.fullScreen,
  }
}

export default connect(
  mapStateToProps
)(Aside)

// TO DELETE
const playlists = [
  {
    id: 1,
    name: "Ambient chill",
  },
  {
    id: 2,
    name: "Cloud rap",
  },
  {
    id: 3,
    name: "Fresh touch",
  }
]
const suggestions = [
  {
    id: 1,
    name: "Ambient chill",
    author: "Ambient chill",
  },
  {
    id: 2,
    name: "Cloud rap",
    author: "Cloud rap",
  },
  {
    id: 3,
    name: "Fresh touch",
    author: "Fresh touch",
  }
]
