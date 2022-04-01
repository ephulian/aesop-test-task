import { useEffect } from 'react';
import '../Styles/Cart.css';

export default function Cart({ toggleCart, cartState, cartContent, setCartContent, children }) {
	// const cart = localStorage.getItem('cart');
	// console.log(JSON.parse(cart));

	// useEffect(() => {
	// 	setCartContent(cartContent);
	// }, [cartContent]);

	return (
		<div className={`cart-container section-center ${cartState}`}>
			<div className='title'>
				<h3>Cart</h3>
				<div onClick={() => toggleCart()} className='cross'></div>
			</div>
			<div className='cart-content'>{children}</div>
		</div>
	);
}
