import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Slide, Spinner } from "../src";
import { withInfo } from "@storybook/addon-info";

const StoryLoaders = storiesOf("Loaders", module)
	.add("Slide", withInfo("This is a slider loader.")(() => <Slide />))
	.add("Spinner", withInfo("This is a spinner loader.")(() => <Spinner />))
	.add("Spinner (custom)", withInfo("This is a custom spinner loader.")(() => <Spinner color="#0085A3" speed="2s" size="50" />));

export default StoryLoaders;
