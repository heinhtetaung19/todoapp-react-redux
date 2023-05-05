import List from '../components/List';
import Navbar from '../components/Navbar';
import NewItem from '../components/NewItem';

const Home = () => {
	return (
		<div>
			<Navbar />
			<NewItem />
			<List />
		</div>
	);
};

export default Home;
