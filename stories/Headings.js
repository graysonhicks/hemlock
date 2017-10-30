import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { H1, H2, H3, H4 } from "../src";
import { withInfo } from "@storybook/addon-info";

const StoryHeading = storiesOf("Headings", module)
	.add("Heading 1", withInfo("This is a level 1 heading.")(() => <H1>Heading 1</H1>))
	.add("Heading 2", withInfo("This is a level 2 heading.")(() => <H2>Heading 2</H2>))
	.add("Heading 3", withInfo("This is a level 2 heading.")(() => <H3>Heading 3</H3>))
	.add("Heading 4", withInfo("This is a level 2 heading.")(() => <H4>Heading 4</H4>));

export default StoryHeading;
