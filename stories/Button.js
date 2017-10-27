import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../src";
import { withInfo } from "@storybook/addon-info";

const NewButton = Button.extend`
	background-color: transparent;
	border: 2px solid tomato;
	color: tomato;
	font-weight: 600;

	&:hover {
		background-color: tomato;
		color: #fff;
	}
`;

const StoryButton = storiesOf("Button", module)
	.add("Default", withInfo("This is a basic simple button.")(() => <Button onClick={action("clicked")}>Hello Button</Button>))
	.add("Custom", withInfo("This is a custom styled button.")(() => <NewButton onClick={action("clicked")}>Hello Button</NewButton>));

export default StoryButton;
