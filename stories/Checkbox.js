import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Checkbox } from "../src";
import { withInfo } from "@storybook/addon-info";

const StoryCheckbox = storiesOf("Checkbox", module).add("Default", withInfo("This is a basic input.")(() => <Checkbox />));

export default StoryCheckbox;
