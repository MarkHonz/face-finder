import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return (
		<div
			style={{
				display: 'flex',
				// justifyContent: 'center',
				// alignContent: 'center',
			}}
			className="ma4 mt0"
		>
			<Tilt className="br2 shadow-2 Tilt">
				<div
					style={{
						height: '150px',
						width: '150px',
						// alignContent: 'center',
						// justifyContent: 'space-around',
					}}
				>
					<img
						className="pa3 mt2"
						// style={{ alignContent: 'center', justifyContent: 'center' }}
						src={brain}
						alt="logo"
					/>
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;
