import React, { Component } from "react";
import styled from "styled-components";
import * as Fonts from "../../fonts";

const StyledAlert = styled.div`
	background: white;
	color: black;
	padding-top: 12px;
	padding-bottom: 12px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	font-family: ${Fonts.primary};
	border-radius: 2px;
`;

export class Alert extends Component {
	render() {
		return <StyledAlert>{this.props.children}</StyledAlert>;
	}
}
