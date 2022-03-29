import React from 'react';
import AesopLogo from '../../../Assets/AesopLogo';
import '../../../Styles/Navbar/NavbarTabletOptions/Shop.css';

export default function Shop() {
	return (
		<article>
			<AesopLogo className='logo' />

			<ul>
				<li>
					<a href='#'>
						<h3>Skin Care</h3>
					</a>
				</li>
				<li>
					<a href='#'>
						<h3>Body & Hand</h3>
					</a>
				</li>
				<li>
					<a href='#'>
						<h3>Hair</h3>
					</a>
				</li>
				<li>
					<a href='#'>
						<h3>Fragrance</h3>
					</a>
				</li>
				<li>
					<a href='#'>
						<h3>Home</h3>
					</a>
				</li>
				<li>
					<a href='#'>
						<h3>Kits & Travel</h3>
					</a>
				</li>
				<li>
					<a href='#'>
						<h3>Gifts</h3>
					</a>
				</li>
			</ul>
			<br />
			<br />
			<h4>Live Assistance</h4>
		</article>
	);
}
