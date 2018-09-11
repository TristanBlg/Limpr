import * as React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../components/Logo'
import List from '../components/List'
import Player from '../components/Player'

function Aside(props){
  const {fullScreen, user} = props

  return (
    <StyledAside fullScreen={fullScreen}>
      <Link to="/">
        <Logo/>
      </Link>
      <Player/>
      {!fullScreen && (
        <React.Fragment>
          <List title="Playlists" items={user.playlists} />
          <List title="Suggestions" items={user.suggestions} />
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
  z-index: 100;
  top: 0;
  left: 0;
  background: #fff;
  border-right: 1px solid #e0e0e0;
`

const mapStateToProps = (state) => {
  return {
    fullScreen: state.fullScreen,
    user: state.user,
  }
}

export default connect(
  mapStateToProps
)(Aside)
