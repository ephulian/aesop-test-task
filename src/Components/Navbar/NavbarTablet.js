import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AesopLogo from '../../Assets/AesopLogo';
import SearchIcon from '../../Assets/SearchIcon';
import '../../Styles/Navbar/NavbarTablet.css';
import Read from './NavbarTabletSelection/Read';
import Search from './NavbarTabletSelection/Search';
import Shop from './NavbarTabletSelection/Shop';
import Stores from './NavbarTabletSelection/Stores';

export default function NavbarTablet({ toggleCart }) {
	const [info, setInfo] = useState('');
	const [options, setOptions] = useState('info-closed');

	const cartStore = useSelector((state) => state.cart.items);
	let cartItems = 0;
	cartStore.forEach((item) => (cartItems += item.quantity));

	const handleSelect = (e) => {
		const currentSelect = e.currentTarget.firstChild.innerHTML;
		const line = e.currentTarget.lastChild;
		const allOptions = document.querySelectorAll('.option');
		setOptions('info-open');

		console.log(e.currentTarget.firstChild.innerHTML);

		const removeLines = (exception) => {
			allOptions.forEach((i) => {
				if (i.firstChild.innerHTML !== exception) {
					i.lastChild.classList.remove('active');
				}
			});
		};

		const search =
			'<title id="search-4650">search</title><g><path d="M11.9544 10.8246C12.8838 9.65831 13.3941 8.18223 13.3941 6.68793C13.3941 3.00683 10.3872 0 6.68793 0C2.98861 0 0 3.00683 0 6.68793C0 10.369 3.00683 13.3759 6.68793 13.3759C8.16401 13.3759 9.64009 12.8656 10.8246 11.9362L14.8519 15.9636L16 14.8155L11.9544 10.8246ZM6.68793 11.7904C3.89977 11.7904 1.62187 9.51253 1.62187 6.72437C1.62187 3.93622 3.89977 1.65831 6.68793 1.65831C9.47608 1.65831 11.754 3.93622 11.754 6.72437C11.754 9.51253 9.47608 11.7904 6.68793 11.7904Z"></path></g>';

		const showOptionContent = (option) => {
			switch (option) {
				case 'Shop':
					setInfo(<Shop />);
					break;
				case 'Read':
					setInfo(<Read />);
					break;
				case 'Stores':
					setInfo(<Stores />);
					break;
				case search:
					setInfo(<Search />);
					break;
				default:
					setInfo('');
			}
		};

		line.classList.add('active');
		removeLines(currentSelect);
		showOptionContent(currentSelect);
	};

	const handleToggleInfo = (e) => {
		options === 'info-closed' ? setOptions('info-open') : setOptions('info-closed');
		setInfo('');
		const allOptions = document.querySelectorAll('.option').forEach((i) => {
			i.lastChild.classList.remove('active');
		});
	};

	return (
		<>
			<div className='navbar-wrapper section-center'>
				<div className='links-wrapper'>
					<a className='option' onClick={(e) => handleSelect(e)} href='/#'>
						<h3>Shop</h3>
						<div className=''></div>
					</a>
					<a className='option' onClick={(e) => handleSelect(e)} href='/#'>
						<h3>Read</h3>
						<div className=''></div>
					</a>
					<a className='option' onClick={(e) => handleSelect(e)} href='/#'>
						<h3>Stores</h3>
						<div className=''></div>
					</a>
					<a className='option' onClick={(e) => handleSelect(e)} href='/#'>
						<SearchIcon />
						<div className=''></div>
					</a>
					<a className={`${options}`} onClick={(e) => handleToggleInfo(e)} href='/#'>
						<h3>Close</h3>
						<div className='cross'></div>
					</a>
				</div>
				<div className='links-wrapper'>
					<a href='/#'>
						<h3>Login</h3>
					</a>
					<a href='/#'>
						<h3 onClick={() => toggleCart()}> Cart {cartItems}</h3>
					</a>
				</div>
			</div>
			<div className='selection-information'>{info}</div>
		</>
	);
}
