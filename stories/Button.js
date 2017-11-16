import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../src";
import { withInfo } from "@storybook/addon-info";

const StoryButton = storiesOf("Button", module)
	.add("Default", withInfo("This is a default button.")(() => <Button onClick={action("clicked")}>Hello Button</Button>))
	.add(
		"Custom (size)",
		withInfo("This is a custom sized button.")(() => (
			<Button size="large" onClick={action("clicked")}>
				Hello Button
			</Button>
		))
	)
	.add(
		"Custom (colors)",
		withInfo("This is a custom colored button.")(() => (
			<Button bg="#005D72" color="white" border="#0085A3" onClick={action("clicked")}>
				Hello Button
			</Button>
		))
	);

export default StoryButton;
