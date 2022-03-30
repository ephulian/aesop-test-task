import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import ProductDetail from './Components/ProductDetail';

// Database
import { db } from './firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';

function App() {
	const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
	const isTablet = useMediaQuery({ query: '(min-width: 640px)' });
	const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

	const [query, setQuery] = useState('');
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	const productsRef = collection(db, 'products');

	const getProducts = () => {
		setLoading(true);
		onSnapshot(productsRef, (snapshot) => {
			const productsList = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
			setProducts(productsList);
			setLoading(false);
		});
	};

	const currentProduct = products[0];

	useEffect(() => {
		if (isMobile) {
			setQuery('mobile');
		} else if (isTablet && !isDesktop) {
			setQuery('tablet');
		} else if (isDesktop) {
			setQuery('desktop');
		}
		getProducts();
	}, [isMobile, isTablet, isDesktop]);

	return (
		<>
			{/* {query} */}
			{/* cart */}
			{/* shipping */}
			{/* header */}
			{loading ? (
				<h2>Loading...</h2>
			) : (
				<>
					<Navbar query={query} />
					<ProductDetail key={products.id} {...currentProduct} />
				</>
			)}
			{/* <div className='navtigation'>{logo}</div> */}
			{/* {logo} */}
			{/* product detail */}
		</>
	);
}

export default App;
