import List from '../components/List';
import Navbar from '../components/Navbar';
import NewItem from '../components/NewItem';

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="w-[80%] md:w-[60%] mx-auto mb-4">
				<NewItem />
				<List />
			</div>
		</div>
	);
};

export default Home;
