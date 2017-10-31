import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const load = keyframes`
0% {
  transform: translateX(40px);
}

50% {
  transform: translateX(-30px);
}
100% {
  transform: translateX(40px);
}
`;

const Slider = styled.div`
	margin: 100px;
	width: 50px;
	height: 10px;
	background: #000000;
	border-radius: 5px;
	animation: ${load} 1.8s ease-in-out infinite;
	&:before,
	&:after {
		position: absolute;
		display: block;
		content: "";
		animation: ${load} 1.8s ease-in-out infinite;
		height: 10px;
		border-radius: 5px;
	}
	&:before {
		top: -20px;
		left: 10px;
		width: 40px;
		background: #000000;
	}
	&:after {
		bottom: -20px;
		width: 35px;
		background: #000000;
	}
`;

export class Slide extends Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return <Slider />;
	}
}
