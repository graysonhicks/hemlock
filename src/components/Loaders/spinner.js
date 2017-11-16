import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import * as Colors from "../../colors";
import * as Utils from "../../utils/loaders";

const spCircRot = keyframes`
    from { transform: rotate(0deg); }
	to { transform: rotate(359deg); }
`;

const SpinnerCircle = styled.div`
	width: ${props => (props.size ? props.size + "px" : "32px")};
	height: ${props => (props.size ? props.size + "px" : "32px")};
	border: ${props => Utils.getSpinnerBorder(props.size)} ${props => (props.bg ? props.bg : "rgba(0, 0, 0, 0.25)")} solid;
	border-top: ${props => Utils.getSpinnerBorder(props.size)} ${props => (props.color ? props.color : Colors.primary)} solid;
	border-radius: 50%;
	animation: ${spCircRot} ${props => (props.speed ? props.speed : "0.6s")} infinite linear;
`;

export class Spinner extends Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return <SpinnerCircle {...this.props} />;
	}
}
