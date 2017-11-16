import React, { Component } from "react";
import styled from "styled-components";
import * as Fonts from "../../fonts";
import * as Colors from "../../colors";
import * as Utils from "../../utils/button";

export const Button = styled.button`
	background: ${props => (props.bg ? props.bg : Colors.primary)};
	color: ${props => (props.color ? props.color : "white")};
	padding: ${props => Utils.getButtonPadding(props.size)};
	font-size: ${props => Utils.getButtonFontSize(props.size)};
	border: 1px solid ${props => (props.border ? props.border : props.bg || Colors.primary)};
	font-family: ${Fonts.primary};
	cursor: pointer;
	border-radius: 2px;
`;
