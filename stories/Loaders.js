import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Slide, Spinner } from "../src";
import { withInfo } from "@storybook/addon-info";

const StoryLoaders = storiesOf("Loaders", module)
	.add("Slide", withInfo("This is a slider loader.")(() => <Slide />))
	.add("Spinner", withInfo("This is a spinner loader.")(() => <Spinner />));

export default StoryLoaders;
