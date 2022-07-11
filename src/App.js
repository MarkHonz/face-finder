import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.jsx';
import Rank from './components/Rank/Rank.jsx';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm />
				{/* <FaceRecognition /> */}
			</div>
		);
	}
}

export default App;
