import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Badge } from "../src";
import { withInfo } from "@storybook/addon-info";

const StoryBadge = storiesOf("Badge", module).add("Default", withInfo("This is a basic badge.")(() => <Badge>6</Badge>));

export default StoryBadge;
