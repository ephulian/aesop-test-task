import React from 'react';
import SearchIcon from '../../Assets/SearchIcon';

export default function NavbarDesktop() {
	return (
		<div className='navbar-wrapper section-center'>
			<div className='links-wrapper'>
				<a href='#'>
					<h3>Skin Care</h3>
				</a>
				<a href='#'>
					<h3>Body & Hand</h3>
				</a>
				<a href='#'>
					<h3>Hair</h3>
				</a>
				<a href='#'>
					<h3>Fragrance</h3>
				</a>
				<a href='#'>
					<h3>Home</h3>
				</a>
				<a href='#'>
					<h3>Kits & Travel</h3>
				</a>
				<a href='#'>
					<h3>Gifts</h3>
				</a>
				<a href='#'>
					<h3>Read</h3>
				</a>
				<a href='#'>
					<h3>Stores</h3>
				</a>
				<SearchIcon />
			</div>
			<div className='links-wrapper'>
				<a href='#'>
					<h3>Login</h3>
				</a>
				<a href='#'>
					<h3>Cart 0</h3>
				</a>
			</div>
		</div>
	);
}
