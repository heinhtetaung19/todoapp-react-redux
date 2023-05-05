import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/edit/:id" element={<Edit />} />
			</Routes>
		</div>
	);
};

export default App;
