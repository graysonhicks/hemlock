import React from "react";
import styled from "styled-components";
import { H1, H2, H3, H4, Button, Slide, Spinner, Input, Select, Checkbox } from "hemlock";

const Box = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 25px;
`;

const Heading = styled.div`
	font-size: 20px;
	float: left;
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
		<Heading>Button (primary)</Heading>
		<Box>
			<Button primary>Hello, world.</Button>
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
	</div>
);

export default App;
