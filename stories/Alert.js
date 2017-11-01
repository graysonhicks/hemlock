import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Alert } from "../src";
import { withInfo } from "@storybook/addon-info";

const StoryAlert = storiesOf("Alert", module).add("Default", withInfo("This is a basic alert.")(() => <Alert>This is an alert!</Alert>));

export default StoryAlert;
