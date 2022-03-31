import React, { useState } from 'react';
import AesopLogo from '../../Assets/AesopLogo';
import SearchIcon from '../../Assets/SearchIcon';
import '../../Styles/Navbar/NavbarMobile.css';

export default function NavbarMobile({ toggleCart }) {
	const [toggleBurgerMenu, setToggleBurgerMenu] = useState('closed');
	const [cross, setCross] = useState('burger');

	const handleToggle = () => {
		toggleBurgerMenu === 'closed' ? setToggleBurgerMenu('open') : setToggleBurgerMenu('closed');
		cross === 'burger' ? setCross('cross') : setCross('burger');
	};

	return (
		<>
			<div className='navbar-wrapper section-center'>
				<AesopLogo />
				<div className='links-wrapper'>
					<SearchIcon />
					<h3 onClick={() => toggleCart()}> Cart 0</h3>
					<div onClick={() => handleToggle()} className={`${cross}`}></div>
				</div>
			</div>
			<div className={`full-burger-menu ${toggleBurgerMenu}`}>
				<ul>
					<li>
						<a href='#'>
							<h1>Skin Care</h1>
						</a>
						<span className='arrow'></span>
					</li>
					<li>
						<a href='#'>
							<h1>Body & Hand</h1>
						</a>
						<span className='arrow'></span>
					</li>
					<li>
						<a href='#'>
							<h1>Hair</h1>
						</a>
						<span className='arrow'></span>
					</li>
					<li>
						<a href='#'>
							<h1>Fragrance</h1>
						</a>
						<span className='arrow'></span>
					</li>
					<li>
						<a href='#'>
							<h1>Home</h1>
						</a>
						<span className='arrow'></span>
					</li>
					<li>
						<a href='#'>
							<h1>Kits & Travel</h1>
						</a>
						<span className='arrow'></span>
					</li>
					<li>
						<a href='#'>
							<h1>Gifts</h1>
						</a>
						<span className='arrow'></span>
					</li>
				</ul>
			</div>
		</>
	);
}
