import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const spCircRot = keyframes`
    from { transform: rotate(0deg); }
	to { transform: rotate(359deg); }
`;

const SpinnerCircle = styled.div`
	width: 32px;
	height: 32px;
	border: 4px rgba(0, 0, 0, 0.25) solid;
	border-top: 4px rgba(0, 0, 0, 1) solid;
	border-radius: 50%;
	animation: ${spCircRot} 0.6s infinite linear;
`;

export class Spinner extends Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return <SpinnerCircle />;
	}
}
