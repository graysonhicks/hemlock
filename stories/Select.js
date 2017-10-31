import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Select } from "../src";
import { withInfo } from "@storybook/addon-info";

const StorySelect = storiesOf("Select", module).add(
	"Default",
	withInfo("This is a basic select.")(() => (
		<Select>
			<option>Option 1</option>
			<option>Option 2</option>
			<option>Option 3</option>
		</Select>
	))
);

export default StorySelect;
