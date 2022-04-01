import { useSelector } from 'react-redux';
import '../Styles/Cart.css';

export default function Cart({ toggleCart, cartState, children }) {
	const cartStore = useSelector((state) => state.cart.items);
	let total = 0;
	cartStore.forEach((item) => (total += item.price * item.quantity));
	console.log(total);

	return (
		<div className={`cart-container ${cartState}`}>
			<div className='inner-container section-center '>
				<div className='items-container'>
					<div className='title'>
						<h3 className='medium'>Cart</h3>
						<h3 className='small size'>Size</h3>
						<h3 className='small qty'>Quantity</h3>
						<div onClick={() => toggleCart()} className='cross'></div>
					</div>
					<div className='cart-content'>{children}</div>
					<h3 className='promo mobile'>Apply promotional code</h3>
				</div>

				<div className='total-container'>
					<h3 className='promo desktop'>Apply promotional code</h3>

					<h3 className='shipping small'>Shipping from the United Kingdom.</h3>
					<h3 className='compliment small'>Enjoy complimentary shipping on all orders.</h3>
					<div className='total'>
						<h3 className='subtotal medium'>Subtotal (Tax Incl)</h3>
						<h1 className='large'>£{total.toFixed(2)}</h1>
					</div>
					<div className='checkout'>Checkout</div>
					<h3 className='partners medium'>Visa MC ApplePay PayPal Klarna</h3>
				</div>
			</div>
		</div>
	);
}
