import React from 'react';
import { useSelector } from 'react-redux';
import SearchIcon from '../../Assets/SearchIcon';
import '../../Styles/Navbar/NavbarDesktop.css';

export default function NavbarDesktop({ toggleCart }) {
	const cartStore = useSelector((state) => state.cart.items);
	let cartItems = 0;
	cartStore.forEach((item) => (cartItems += item.quantity));

	return (
		<div className='navbar-wrapper section-center'>
			<div className='links-wrapper'>
				<a href='#'>
					<h3 className='desktop-links'>Skin Care</h3>
				</a>
				<a href='#'>
					<h3 className='desktop-links'>Body & Hand</h3>
				</a>
				<a href='#'>
					<h3 className='desktop-links'>Hair</h3>
				</a>
				<a href='#'>
					<h3 className='desktop-links'>Fragrance</h3>
				</a>
				<a href='#'>
					<h3 className='desktop-links'>Home</h3>
				</a>
				<a href='#'>
					<h3 className='desktop-links'>Kits & Travel</h3>
				</a>
				<a href='#'>
					<h3 className='desktop-links'>Gifts</h3>
				</a>
				<a href='#'>
					<h3 className='desktop-links'>Read</h3>
				</a>
				<a href='#'>
					<h3 className='desktop-links'>Stores</h3>
				</a>
				<SearchIcon />
			</div>
			<div className='links-wrapper'>
				<a href='#'>
					<h3 className='desktop-links'>Login</h3>
				</a>
				<a href='#'>
					<h3 onClick={() => toggleCart()}> Cart {cartItems}</h3>
				</a>
			</div>
		</div>
	);
}
