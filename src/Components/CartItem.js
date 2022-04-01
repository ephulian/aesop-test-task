import { render } from '@testing-library/react';
import React, { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItems } from '../Store/cart';
import Dropdown from './Utility/Dropdown';

export default function CartItem({ name, id, description, price, size, quantity }) {
	const dispatch = useDispatch();
	// console.log(props);

	const quantities = [
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

	const total = parseInt(price * quantity);

	const handleRemove = (e) => {
		dispatch(removeItems({ id: id, size: size }));
	};

	return (
		<div className='cart-item'>
			<h3 className='cart-item__title'>{name}</h3>
			<div className='cart_item__size-wrapper'>
				<h4 className='cart-item__size small'>{size}</h4>
				<h4 onClick={(e) => handleRemove(e)} className='cart-item__remove small mobile'>
					Remove
				</h4>
			</div>
			<h4 className='cart-item__price small'>£{total.toFixed(2)}</h4>
			<div className='quantities-container'>
				<h4 onClick={(e) => handleRemove(e)} className='cart-item__remove small desktop'>
					Remove
				</h4>
				<Dropdown quantities={quantities} id={id} />
			</div>
		</div>
	);
}
