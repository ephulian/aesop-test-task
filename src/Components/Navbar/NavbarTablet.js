import React from 'react';
import AesopLogo from '../../Assets/AesopLogo';
import SearchIcon from '../../Assets/SearchIcon';
import '../../Styles/Navbar/NavbarTablet.css';

export default function NavbarTablet() {
	const handleSelect = (e) => {
		const currentSelect = e.currentTarget.firstChild.innerHTML;
		const line = e.currentTarget.lastChild;

		const removeLines = (exception) => {
			const allActive = document.querySelectorAll('.option');
			allActive.forEach((i) => {
				if (i.firstChild.innerHTML !== exception) {
					i.lastChild.classList.remove('active');
				}
			});
		};

		line.classList.add('active');
		removeLines(currentSelect);
	};

	return (
		<div className='navbar-wrapper section-center'>
			<div className='links-wrapper'>
				<a className='option' onClick={(e) => handleSelect(e)} href='#'>
					<h3>Shop</h3>
					<div className=''></div>
				</a>
				<a className='option' onClick={(e) => handleSelect(e)} href='#'>
					<h3>Read</h3>
					<div className=''></div>
				</a>
				<a className='option' onClick={(e) => handleSelect(e)} href='#'>
					<h3>Stores</h3>
					<div className=''></div>
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
