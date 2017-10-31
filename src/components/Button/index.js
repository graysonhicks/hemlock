import React, { Component } from "react";
import styled from "styled-components";
import * as Fonts from "../fonts";

const button = styled.button`
	background: white;
	color: black;
	padding: 6px 12px;
	border: 1px solid black;
	font-family: ${Fonts.primary};
`;

export const BigButton = button.extend`
	font-size: 2rem;
	padding: 10px 20px;
`;

export const SmallButton = button.extend`
	padding: 3px 6px;
	font-size: 0.75rem;
`;

export class Button extends Component {
	render() {
		return <Button />;
	}
}
