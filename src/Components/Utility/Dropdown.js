import React, { useState } from 'react';
import reactOnclickoutside from 'react-onclickoutside';
import '../../Styles/Utility/Dropdown.css';

function Dropdown({ quantities = [] }) {
	const [open, setOpen] = useState('');
	const [dropdownValue, setDropdownValue] = useState(1);

	Dropdown.handleClickOutside = () => setOpen('');

	const handleClick = () => {
		!open ? setOpen('active') : setOpen('');
	};

	const pickValue = (e) => {
		setDropdownValue(e.target.innerHTML);
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

const clickOutsideConfig = {
	handleClickOutside: () => Dropdown.handleClickOutside,
};

export default reactOnclickoutside(Dropdown, clickOutsideConfig);
