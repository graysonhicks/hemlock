import React, { Component } from "react";
import styled from "styled-components";
import * as Fonts from "../../fonts";

const StyledBadge = styled.div`
	background: white;
	color: black;
	height: 20px;
	width: 20px;
	font-size: 12px;
	border: 1px solid black;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${Fonts.primary};
`;

export class Badge extends Component {
	render() {
		return <StyledBadge>{this.props.children}</StyledBadge>;
	}
}
