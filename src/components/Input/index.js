import React, { Component } from "react";
import styled from "styled-components";
import * as Fonts from "../../fonts";

const StyledInput = styled.input`
	background: white;
	color: black;
	padding: 6px 12px;
	border: 1px solid black;
	font-family: ${Fonts.primary};
`;

export class Input extends Component {
	render() {
		return <StyledInput />;
	}
}
