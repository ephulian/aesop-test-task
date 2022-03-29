import React from 'react';
import AesopLogo from '../../../Assets/AesopLogo';
import '../../../Styles/Navbar/NavbarTabletOptions/Read.css';

export default function Read() {
	return (
		<article>
			<AesopLogo className='logo' />

			<ul>
				<li>
					<h2>About</h2>
				</li>
				<li>
					<a href='#'>
						<h3>Our Story</h3>
					</a>
				</li>
				<li>
					<a href='#'>
						<h3>Careers</h3>
					</a>
				</li>
				<li>
					<a href='#'>
						<h3>Foundation</h3>
					</a>
				</li>
				<li>
					<a href='#'>
						<h3>Contact us</h3>
					</a>
				</li>
			</ul>
			<br />
			<ul>
				<li>
					<h2>Philosophy</h2>
				</li>
				<li>
					<a href='#'>
						<h3>Design</h3>
					</a>
				</li>
				<li>
					<a href='#'>
						<h3>Products</h3>
					</a>
				</li>
				<br />
				<li>
					<a href='#'>
						<h3>Taxonomy of Design</h3>
					</a>
				</li>
			</ul>
		</article>
	);
}
