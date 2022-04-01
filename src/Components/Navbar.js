import React from 'react';
import NavbarDesktop from './Navbar/NavbarDesktop';
import NavbarMobile from './Navbar/NavbarMobile';
import NavbarTablet from './Navbar/NavbarTablet';
import '../Styles/Root/Global.css';

export default function Navbar({ query, toggleCart }) {
	return (
		<div id='navbar'>
			{(() => {
				switch (query) {
					case 'mobile':
						return <NavbarMobile toggleCart={toggleCart} />;
					case 'tablet':
						return <NavbarTablet toggleCart={toggleCart} />;
					case 'desktop':
						return <NavbarDesktop toggleCart={toggleCart} />;
					default:
				}
			})()}
		</div>
	);
}
