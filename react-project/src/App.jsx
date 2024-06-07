import { useState } from 'react'
import './App.css'


function App() {
	const [count, setCount] = useState(0)

	return (
		<div id="app">
			<h1> Knightbase </h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					click!
				</button>
				<span style={{display: "inline-block", paddingLeft: "1em"}}>
					counter: {count}
				</span>

				<form>
					<label htmlFor="name">Name</label>
					<input name="name" id="name" placeholder="enter your name"></input>

					<label htmlFor="color">Favorite Color</label>
					<select name="color" id="color">
						<option selected disabled>select a color</option>
						<option>red</option>
						<option>yellow</option>
						<option>green</option>
						<option>blue</option>
					</select>

					<div>
					<input name="subscribe" id="subscribe" type="checkbox"></input>
					Subscribe to our newsletter
					</div>

				</form>
			</div>
		</div>
	)
}

export default App
