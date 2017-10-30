import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button, BigButton, SmallButton } from "../src";
import { withInfo } from "@storybook/addon-info";

const StoryButton = storiesOf("Button", module)
	.add("Default", withInfo("This is a basic simple button.")(() => <Button onClick={action("clicked")}>Hello Button</Button>))
	.add("Big", withInfo("This is a big button.")(() => <BigButton onClick={action("clicked")}>Hello Button</BigButton>))
	.add("Small", withInfo("This is a big button.")(() => <SmallButton onClick={action("clicked")}>Hello Button</SmallButton>));

export default StoryButton;
