import React from 'react';
import NavbarDesktop from './Navbar/NavbarDesktop';
import NavbarMobile from './Navbar/NavbarMobile';
import NavbarTablet from './Navbar/NavbarTablet';
import '../Styles/Root/Global.css';

export default function Navbar({ query }) {
	return (
		<div id='navbar'>
			{(() => {
				switch (query) {
					case 'mobile':
						return <NavbarMobile />;
					case 'tablet':
						return <NavbarTablet />;
					case 'desktop':
						return <NavbarDesktop />;
					default:
				}
			})()}
		</div>
	);
}
