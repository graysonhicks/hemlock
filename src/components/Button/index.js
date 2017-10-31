import React, { Component } from "react";
import styled from "styled-components";
import * as Fonts from "../fonts";

export const Button = styled.button`
	background: ${props => (props.primary ? "palevioletred" : "white")};
	margin: 6px;
	color: ${props => (props.primary ? "white" : "black")};
	padding: 6px 12px;
	border: 1px solid ${props => (props.primary ? "palevioletred" : "black")};
	font-family: ${Fonts.primary};
`;
