import React, { Component } from "react";
import styled from "styled-components";
import * as Fonts from "../fonts";

const StyledCheckbox = styled.input``;

export class Checkbox extends Component {
	render() {
		return <StyledCheckbox type="checkbox" />;
	}
}
