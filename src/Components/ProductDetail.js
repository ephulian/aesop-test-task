import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AesopLogo from '../Assets/AesopLogo';
import { addItems } from '../Store/cart';
import '../Styles/ProductDetail.css';
import ProductOptions from './ProductOptions';

export default function ProductDetail(props) {
	const { description, id, name, sizeOptions, specs } = props;

	const [sizeOptionsState, setSizeOptions] = useState([]);
	const [sizeImage, setSizeImage] = useState([]);
	const [price, setPrice] = useState(0);
	const [specsState, setSpecsState] = useState({});

	const dispatch = useDispatch();
	const cartStore = useSelector((state) => state);

	const pickedRadioOption = () => {
		const pickedOption = document.querySelector('input[name="my-radio-field"]:checked');
		setSizeImage(sizeOptions[pickedOption.id][0]);
		setPrice(sizeOptions[pickedOption.id][1].toFixed(2));
	};

	const addToCart = () => {
		const pickedOption = document.querySelector('input[name="my-radio-field"]:checked');
		const cart = [
			{
				name: name,
				id: `${id}-${pickedOption === null ? Object.keys(sizeOptions)[0] : pickedOption.id}`,
				description: description,
				size: pickedOption === null ? Object.keys(sizeOptions)[0] : pickedOption.id,
				quantity: 1,
				price: pickedOption === null ? Object.values(sizeOptions)[0][1] : price,
			},
		];

		dispatch(addItems(...cart));
	};

	useEffect(() => {
		if (sizeOptions) {
			setSizeOptions(Object.keys(sizeOptions).sort());
			setSizeImage(Object.entries(sizeOptions).sort()[0][1][0]);
			setPrice(Object.entries(sizeOptions).sort()[0][1][1].toFixed(2));
			setSpecsState(specs);
		}
	}, [sizeOptions]);

	return (
		<section id='product-detail' className='product-detail section-center'>
			<div className='type'>
				<h3>Skin</h3>
				<h1>•</h1>
				<h3>Cleanse</h3>
			</div>
			<div className='product-img-container'>
				<AesopLogo className='company-logo' />
				<img src={sizeImage} className='product-img' alt='' />
			</div>
			<div className='product-info'>
				<h1 className='product-title'>{name}</h1>
				<p className='description'>{description}</p>
			</div>
			<div className='pick-and-pay'>
				<h3 className='product-options-title'>Sizes</h3>
				{sizeOptionsState.map((size, index) => {
					return (
						<ProductOptions
							size={size}
							index={index}
							key={index}
							pickedRadioOption={pickedRadioOption}
						/>
					);
				})}
				<br />
				<button
					onClick={() => addToCart()}
					className='add-to-cart'
				>{`Add to your cart - £${price}`}</button>
				<div className='pay-later'>
					<h3>
						Pay in 30 days with <span className='klarna'>Klarna</span> No fees.{' '}
						<span>
							<a href='/#'> Learn more</a>
						</span>
					</h3>
				</div>
			</div>
			<div className='product-specs'>
				<div className='specs-body-wrapper'>
					<div className='single-spec'>
						<h2>Suited to</h2>
						<h3>{`${specsState['Suited-To']}`}</h3>
					</div>
					<div className='single-spec'>
						<h2>Skin Feel</h2>
						<h3>{`${specsState['Skin-Feel']}`}</h3>
					</div>
					<div className='single-spec'>
						<h2>Key Ingredients</h2>
						<h3>{`${specsState['Key Ingredients']}`}</h3>
					</div>
					{/* <div className='single-spec upsell'>
						<h2>Discover the kit</h2>
						<h3>{`${specsState['Kit']}`}</h3>
					</div> */}
				</div>
			</div>
			<div className='single-spec upsell'>
				<h2>Discover the kit</h2>
				<h3>{`${specsState['Kit']}`}</h3>
			</div>
		</section>
	);
}
