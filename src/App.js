import AesopLogo from './Assets/AesopLogo';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';

function App() {
	const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
	const isTablet = useMediaQuery({ query: '(min-width: 640px)' });
	const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

	const [query, setQuery] = useState('');

	useEffect(() => {
		if (isMobile) {
			setQuery('mobile');
		} else if (isTablet && !isDesktop) {
			setQuery('tablet');
		} else if (isDesktop) {
			setQuery('desktop');
		}
	}, [isMobile, isTablet, isDesktop]);

	return (
		<>
			{/* {query} */}
			{/* cart */}
			{/* shipping */}
			{/* header */}
			<Navbar query={query} />
			{/* <div className='navtigation'>{logo}</div> */}
			{/* {logo} */}
			{/* product detail */}
		</>
	);
}

export default App;
