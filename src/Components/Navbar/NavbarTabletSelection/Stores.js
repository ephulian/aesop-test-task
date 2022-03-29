import React, { useEffect, useRef, useState } from 'react';
import AesopLogo from '../../../Assets/AesopLogo';
import '../../../Styles/Navbar/NavbarTabletOptions/Stores.css';

export default function Stores() {
	const [placeholder, setPlaceholder] = useState('down');
	const [focused, setFocused] = useState(false);

	const onFocus = () => setFocused(true);
	const onBlur = () => setFocused(false);

	const movePlaceholder = (e) => {
		if (focused) {
			setPlaceholder('up');
		} else {
			setPlaceholder('down');
		}
	};

	useEffect(() => {
		movePlaceholder();
	}, [focused]);

	return (
		<article>
			<AesopLogo className='stores-logo' />

			<h3>
				Click and Collect available at <br /> select stores
			</h3>

			<div className='nearby-stores'>
				<h2>See nearby stores</h2>
			</div>
			<h2 className='search-by'>Or search by</h2>
			<br />
			<br />
			<div className='input-container' onClick={(e) => movePlaceholder(e)}>
				<p className={`${placeholder}`}>City, State or Postcode</p>
				<input onFocus={onFocus} onBlur={onBlur} type='text' />
			</div>
		</article>
	);
}
