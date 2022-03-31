import React, { useState } from 'react';
import '../Styles/Cart.css';
import Dropdown from './Utility/Dropdown';

export default function Cart({ toggleCart, cartState }) {
	const [selectValue, setSelectValue] = useState(1);
	const [dropdownValue, setDropdownValue] = useState(1);

	const handleClick = () => {
		const options = document.querySelector('.options-container');
		options.classList.toggle('active');
	};

	const pickValue = (e) => {
		setDropdownValue(e.target.innerHTML);
		handleClick();
	};

	const items = [
		{
			id: 1,
			value: 1,
		},
		{
			id: 2,
			value: 2,
		},
		{
			id: 3,
			value: 3,
		},
		{
			id: 4,
			value: 4,
		},
		{
			id: 5,
			value: 5,
		},
	];

	return (
		<div className={`cart-container section-center ${cartState}`}>
			<div className='title'>
				<h3>Cart</h3>
				<div onClick={() => toggleCart()} className='cross'></div>
			</div>
			<div className='cart-content'>
				<div className='cart-item'>
					<h3 className='cart-item__title'>In Two Minds Facial Cleanser</h3>
					<div className='cart_item__size-wrapper'>
						<h4 className='cart-item__size'>100mL</h4>
						<h4 className='cart-item__remove'>Remove</h4>
					</div>
					<h4 className='cart-item__price'>£46.00</h4>
					<div className='select-box'>
						<div onClick={(e) => handleClick(e)} className='selected'>
							{dropdownValue}
						</div>
						<div className='options-container'>
							{items.map((item) => (
								<div key={item.id} className='option'>
									<input type='radio' className='radio' id='1' name='category' />
									<label onClick={(e) => pickValue(e)} htmlFor='category'>
										{item.value}
									</label>
								</div>
							))}
						</div>
						{/* <div onClick={(e) => handleClick(e)} className='selected'>
							{dropdownValue}
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}
