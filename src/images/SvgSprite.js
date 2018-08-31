import * as React from 'react'

const LogoSvg = (props) =>{
  const {width} = props
  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 0 220 100">
        <rect x="27" y="20" fill="currentColor" width="17" height="80"/>
        <rect x="54" y="0" fill="currentColor" width="17" height="80"/>
        <rect x="0" y="0" fill="currentColor" width="17" height="80"/>
        <text x="91" y="70" fill="currentColor">Limpr</text>
      </svg>
    </React.Fragment>
  )
}
const AddSvg = (props) =>{
  const {width, height} = props
  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64">
        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M32,3.9v55.7 M59.9,31.8H4.2" strokeLinejoin="round" strokeLinecap="round"></path>
      </svg>
    </React.Fragment>
  )
}
const PlaySvg = (props) =>{
  const {width, height} = props
  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64">
        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M6 2l52 30L6 62V2z" strokeLinejoin="round" strokeLinecap="butt"></path>
      </svg>
    </React.Fragment>
  )
}
const PrevSvg = (props) =>{
  const {width, height} = props
  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64">
        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M56 53.8L24 32l32-21.8v43.6z"
        strokeLinejoin="round" strokeLinecap="round"></path>
        <path fill="none" stroke="currentColor" strokeMiterlimit="10"
        strokeWidth="2" d="M16 8v48H8V8h8z" strokeLinejoin="round" strokeLinecap="round"></path>
      </svg>
    </React.Fragment>
  )
}
const FullScreenSvg = (props) =>{
  const {width, height} = props
  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64">
        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M20 24h24v16H20z" strokeLinejoin="round" strokeLinecap="round"></path>
        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M2 18V6h12M2.003 6L14 18m48 0V6H50m11.997 0L50 18M2 46v12h12M2.003 58L14 46m48 0v12H50m11.997 0L50 46" strokeLinejoin="round" strokeLinecap="round"></path>
      </svg>
    </React.Fragment>
  )
}
const NotFullScreenSvg = (props) =>{
  const {width, height} = props
  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64">
        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M20 24h24v16H20z" strokeLinejoin="round" strokeLinecap="round"></path>
        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M14 6v12H2m11.997 0L2 6m48 0v12h12m-11.997 0L62 6M14 58V46H2m11.997 0L2 58m48 0V46h12m-11.997 0L62 58" strokeLinejoin="round" strokeLinecap="round"></path>
      </svg>
    </React.Fragment>
  )
}
const NextSvg = (props) =>{
  const {width, height} = props
  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64">
        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M8 53.8L40 32 8 10.2v43.6z" strokeLinejoin="round" strokeLinecap="round"></path>
        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M48 8v48h8V8h-8z" strokeLinejoin="round" strokeLinecap="round"></path>
      </svg>
    </React.Fragment>
  )
}
const PauseSvg = (props) =>{
  const {width, height} = props
  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64">
        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M13 4h12v56H13z" strokeLinejoin="round" strokeLinecap="round"></path>
        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M41 4h12v56H41z" strokeLinejoin="round" strokeLinecap="round"></path>
      </svg>
    </React.Fragment>
  )
}

export {
  LogoSvg,
  AddSvg,
  PlaySvg,
  PrevSvg,
  FullScreenSvg,
  NotFullScreenSvg,
  NextSvg,
  PauseSvg,
}