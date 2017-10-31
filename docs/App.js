import React from "react";
import { H1, H2, H3, H4, Button, Slide, Spinner, Input, Select } from "hemlock";

const App = () => (
	<div>
		<H1>Hello, world.</H1>
		<H2>Hello, world.</H2>
		<H3>Hello, world.</H3>
		<H4>Hello, world.</H4>
		<Button>Hello, world.</Button>
		<br />
		<Button primary>Hello, world.</Button>
		<Slide />
		<Spinner />
		<Input />
		<br />
		<Select>
			<option disabled selected>
				Test
			</option>
			<option>Hello</option>
			<option>Bye</option>
			<option>Third</option>
		</Select>
	</div>
);

export default App;
