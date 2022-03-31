import React, { useState } from 'react';
import reactOnclickoutside from 'react-onclickoutside';
// import reactOnclickoutside from 'react-onclickoutside';

function Dropdown({ title, items = [], multiSelect = false }) {
	const [open, setOpen] = useState(false);
	const [selection, setSelection] = useState([]);
	const toggle = () => setOpen(!open);

	Dropdown.handleClickOutside = () => setOpen(false);

	const handleOnClick = (item) => {
		if (!selection.some((current) => current.id === item.id)) {
			if (!multiSelect) {
				setSelection([item]);
			} else if (multiSelect) {
			}
		} else {
			let selectionAfterRemoval = selection;
			selectionAfterRemoval = selectionAfterRemoval.filter((current) => current.id !== item.id);
			setSelection([...selectionAfterRemoval]);
		}
	};

	const isItemInSelection = (item) => {
		if (selection.some((current) => current.id === item.id)) {
			return true;
		}
		return false;
	};

	return (
		<>
			<div className='dd-wrapper'>
				<div
					tabIndex={0}
					className='dd-header'
					role='button'
					onClick={() => {
						toggle(!open);
					}}
				>
					<div className='dd-header__title'>
						<p className='dd-header__title--bold'>{title}</p>
					</div>
					<div className='dd-header__action'>
						<p>{open ? 'close' : 'open'}</p>
					</div>
				</div>
				{open && (
					<ul className='dd-list'>
						{items.map((item) => (
							<li className='dd-list__item' key={item.id}>
								<button
									type='button'
									onClick={() => {
										handleOnClick(item);
									}}
								>
									<span>{item.value}</span>
									<span>{isItemInSelection(item) && 'Selected'}</span>
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
}

const clickOutsideConfig = {
	handleClickOutside: () => Dropdown.handleClickOutside,
};

export default reactOnclickoutside(Dropdown, clickOutsideConfig);
