import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../src";
import { withInfo } from "@storybook/addon-info";

const StoryButton = storiesOf("Button", module)
	.add("Default", withInfo("This is a basic simple button.")(() => <Button onClick={action("clicked")}>Hello Button</Button>))
	.add(
		"Primary",
		withInfo("This is a primary button.")(() => (
			<Button primary onClick={action("clicked")}>
				Hello Button
			</Button>
		))
	);

export default StoryButton;
