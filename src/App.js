import React, { component } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';

class App extends component {
	render() {
		return (
			<div className="App">
				<Navigation />
				{/* <Logo /> */}
				{/* <ImageLinkForm /> */}
				{/* <FaceRecognition /> */}
			</div>
		);
	}
}

export default App;
