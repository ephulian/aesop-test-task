import React, { useState } from 'react';
import reactOnclickoutside from 'react-onclickoutside';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity } from '../../Store/cart';
import '../../Styles/Utility/Dropdown.css';

function Dropdown({ quantities = [], id }) {
	const items = useSelector((state) => state.cart.items);
	const current = items.find((item) => item.id === id);

	const [open, setOpen] = useState('');
	const [dropdownValue, setDropdownValue] = useState(items[items.indexOf(current)].quantity);

	const dispatch = useDispatch();

	// Dropdown.handleClickOutside = () => setOpen('');

	const handleClick = () => {
		!open ? setOpen('active') : setOpen('');
	};

	const pickValue = (e) => {
		setDropdownValue(e.target.innerHTML);
		dispatch(changeQuantity({ id: id, quantity: parseInt(e.target.innerHTML) }));
		handleClick();
	};

	return (
		<div className='select-box'>
			<div onClick={(e) => handleClick(e)} className='selected'>
				{dropdownValue}
			</div>
			<div className={`options-container ${open}`}>
				{quantities.map((item) => (
					<div key={item.id} className='option'>
						<input type='radio' className='radio' id='1' name='category' />
						<label onClick={(e) => pickValue(e)} htmlFor='category'>
							{item.value}
						</label>
					</div>
				))}
			</div>
		</div>
	);
}

// const clickOutsideConfig = {
// 	handleClickOutside: () => Dropdown.handleClickOutside,
// };

export default Dropdown;

// export default reactOnclickoutside(Dropdown, clickOutsideConfig);
