import * as React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import styled from 'styled-components'
import Header from "../containers/Header"
import Aside from "../containers/Aside"
import News from "../containers/News"
import Profile from "../containers/Profile"

const App = styled.div `
  padding-left: 335px;  
`

const Router = () => {
  return (
    <BrowserRouter>
      <App>
        <Aside/>
        <Header/>
        <Route exact path="/" component={News} />
        <Route path="/profile" component={Profile} />
      </App>
    </BrowserRouter>
  )
}

export default Router
