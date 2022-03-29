import React from 'react';
import AesopLogo from '../../../Assets/AesopLogo';
import '../../../Styles/Navbar/NavbarTabletOptions/Search.css';

export default function Search() {
	return (
		<article>
			<AesopLogo className='stores-logo' />
			<div>
				<input type='text' />
			</div>
			<h3 className='suggested'>Suggested</h3>
			<ul>
				<li>Cleanser</li>
				<li>Hydrators</li>
				<li>Parsleyseed</li>
				<li>Gifts</li>
			</ul>
		</article>
	);
}
