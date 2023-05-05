import { toggleDone, deleteItem, editItem } from '../slices/items/itemsSlice';
import { useDispatch } from 'react-redux';
import { FiSquare as UndoneIcon } from 'react-icons/fi';
import {
	BsCheckSquare as DoneIcon,
	BsTrash3Fill as TrashIcon,
} from 'react-icons/bs';
import { AiFillEdit as EditIcon } from 'react-icons/ai';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ item }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const inputRef = useRef(null);

	const editHandler = () => {
		navigate(`/edit/${item.id}`);
	};

	return (
		<section>
			<div className="p-2 border-b-2 flex justify-between items-center">
				<div className="flex gap-2 text-xl items-center">
					<span
						className=""
						onClick={() => dispatch(toggleDone(item.id))}
					>
						{item.isDone ? <DoneIcon /> : <UndoneIcon />}
					</span>

					<p className={item.isDone ? 'opacity-60' : ''}>
						{item.name}
					</p>
				</div>

				<div className="flex gap-4">
					<span className="text-xl text-blue-600">
						<EditIcon onClick={editHandler} />
					</span>
					<span className="text-xl text-red-600">
						<TrashIcon
							onClick={() => dispatch(deleteItem(item.id))}
						/>
					</span>
				</div>
			</div>
		</section>
	);
};

export default ListItem;
