import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.jsx';
import Rank from './components/Rank/Rank.jsx';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.jsx';
import './App.css';

const app = new Clarifai.App({
	apiKey: 'a0256efc3eeb4361980d63eea89c2db4',
});
class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
		};
	}

	onInputChange = (event) => {
		console.log(event.target.value);
	};

	onButtonSubmit = () => {
		console.log('click');
		app.model
			.predict(
				'a0256efc3eeb4361980d63eea89c2db4',
				'https://samples.clarifai.com/face-det.jpg'
			)
			.then(
				function (response) {
					console.log(response);
				},
				function (error) {
					console.log(error);
				}
			);
	};

	render() {
		return (
			<div className="App">
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm
					onInputChange={this.onInputChange}
					onButtonSubmit={this.onButtonSubmit}
				/>
				<FaceRecognition />
			</div>
		);
	}
}

export default App;
