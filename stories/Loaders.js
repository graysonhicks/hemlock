import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Slide } from "../src";
import { withInfo } from "@storybook/addon-info";

const StoryLoaders = storiesOf("Loaders", module).add("Slide", withInfo("This is a basic simple button.")(() => <Slide>Hello Button</Slide>));

export default StoryLoaders;
