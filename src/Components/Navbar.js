import React, { useEffect, useState } from 'react';
import NavbarDesktop from './Navbar/NavbarDesktop';
import NavbarMobile from './Navbar/NavbarMobile';
import NavbarTablet from './Navbar/NavbarTablet';

export default function Navbar({ query }) {
	return (
		<>
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
		</>
	);
}
