import styled from "styled-components";
import * as Fonts from "../fonts";

export const Button = styled.button`
	background: white;
	color: black;
	padding: 6px 12px;
	border: 1px solid black;
	font-family: ${Fonts.primary};
`;

export const BigButton = Button.extend`
	font-size: 2rem;
	padding: 10px 20px;
`;

export const SmallButton = Button.extend`
	padding: 3px 6px;
	font-size: 0.75rem;
`;
