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
			<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32">
				<path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
			</svg>
		</React.Fragment>
	)
}
const PlaySvg = (props) =>{
	const {width, height} = props
	return (
		<React.Fragment>
			<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32">
				<path d="M6 4l20 12-20 12z"></path>
			</svg>
		</React.Fragment>
	)
}
const PrevSvg = (props) =>{
	const {width, height} = props
	return (
		<React.Fragment>
			<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32">
				<path d="M8 28v-24h4v11l10-10v22l-10-10v11z"></path>
			</svg>
		</React.Fragment>
	)
}
const FullScreenSvg = (props) =>{
	const {width, height} = props
	return (
		<React.Fragment>
			<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32">
				<path d="M32 0v13l-5-5-6 6-3-3 6-6-5-5zM14 21l-6 6 5 5h-13v-13l5 5 6-6z"></path>
			</svg>
		</React.Fragment>
	)
}
const NextSvg = (props) =>{
	const {width, height} = props
	return (
		<React.Fragment>
			<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32">
				<path d="M24 4v24h-4v-11l-10 10v-22l10 10v-11z"></path>
			</svg>
		</React.Fragment>
	)
}
const PauseSvg = (props) =>{
	const {width, height} = props
	return (
		<React.Fragment>
			<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32">
				<path d="M4 4h10v24h-10zM18 4h10v24h-10z"></path>
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
	NextSvg,
	PauseSvg,
}