import React from 'react';
import '../Styles/ProductDetail.css';

export default function ProductOptions({ size, index, pickedRadioOption }) {
	return (
		<label htmlFor='option_2' className='radio'>
			<input
				onChange={() => pickedRadioOption()}
				type='radio'
				name='my-radio-field'
				id={`${size}`}
				className='radio__input'
			/>
			{size}
		</label>
	);
}
