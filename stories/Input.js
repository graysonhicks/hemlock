import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Input } from "../src";
import { withInfo } from "@storybook/addon-info";

const StoryInput = storiesOf("Input", module).add("Default", withInfo("This is a basic input.")(() => <Input />));

export default StoryInput;
