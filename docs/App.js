import React from "react";
import styled from "styled-components";
import { H1, H2, H3, H4, Button, Slide, Spinner, Input, Select, Checkbox, Alert, Badge } from "hemlock";

const Box = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 25px;
`;

const Heading = styled.div`
	font-size: 20px;
	text-align: center;
	font-family: Arial;
	text-decoration: underline;
	margin-bottom: 15px;
`;

const App = () => (
	<div>
		<Heading>Heading 1</Heading>
		<Box>
			<H1>Hello, world.</H1>
		</Box>
		<Heading>Heading 2</Heading>
		<Box>
			<H2>Hello, world.</H2>
		</Box>
		<Heading>Heading 3</Heading>
		<Box>
			<H3>Hello, world.</H3>
		</Box>
		<Heading>Heading 4</Heading>
		<Box>
			<H4>Hello, world.</H4>
		</Box>
		<Heading>Button (default)</Heading>
		<Box>
			<Button>Hello, world.</Button>
		</Box>
		<Heading>Button (custom)</Heading>
		<Box>
			<Button bg="#00C229" size="small">
				Small
			</Button>
		</Box>
		<Heading>Button (custom)</Heading>
		<Box>
			<Button bg="#00881D" size="medium">
				Medium
			</Button>
		</Box>
		<Heading>Button (custom)</Heading>
		<Box>
			<Button bg="#80FF9A" size="large" border="black">
				Large
			</Button>
		</Box>
		<Heading>Loader (slider)</Heading>
		<Box>
			<Slide />
		</Box>
		<Heading>Loader (spinner)</Heading>
		<Box>
			<Spinner />
		</Box>
		<Heading>Input</Heading>
		<Box>
			<Input />
		</Box>
		<Heading>Select</Heading>
		<Box>
			<Select>
				<option disabled selected>
					Test
				</option>
				<option>Hello</option>
				<option>Bye</option>
				<option>Third</option>
			</Select>
		</Box>
		<Heading>Checkbox</Heading>
		<Box>
			<Checkbox />
		</Box>
		<Heading>Alert</Heading>
		<Box>
			<Alert>This is an alert!</Alert>
		</Box>
		<Heading>Badge</Heading>
		<Box>
			<Badge>6</Badge>
		</Box>
	</div>
);

export default App;
