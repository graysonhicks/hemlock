import React, { Component } from "react";
import styled from "styled-components";
import * as Fonts from "../../fonts";

const StyledSelect = styled.select`
	background: white;
	color: black;
	padding: 6px 12px;
	border: 1px solid black;
	font-family: ${Fonts.primary};
	border-radius: 2px;
`;

export class Select extends Component {
	render() {
		return <StyledSelect>{this.props.children}</StyledSelect>;
	}
}
