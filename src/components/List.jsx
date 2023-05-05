import { useSelector, useDispatch } from 'react-redux';
import ListItem from './ListItem';

const List = () => {
	const items = useSelector(state => state.items.value);
	return (
		<section>
			{/* Undone list */}
			<div className="mb-8">
				{items
					.filter(item => !item.isDone)
					.map(item => (
						<ListItem key={item.id} item={item} />
					))}
			</div>

			{/* Done List */}
			<div>
				{items
					.filter(item => item.isDone)
					.map(item => (
						<ListItem key={item.id} item={item} />
					))}
			</div>
		</section>
	);
};

export default List;
