import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editItem } from '../slices/items/itemsSlice';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft as ArrowIcon } from 'react-icons/bs';

const Edit = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id } = useParams();
	const items = useSelector(state => state.items.value);

	const itemToEdit = items.find(item => item.id == id);

	const [itemName, setItemName] = useState(itemToEdit.name);

	const editHandler = e => {
		e.preventDefault();
		dispatch(editItem({ id: itemToEdit.id, name: itemName }));
		navigate('/');
	};

	return (
		<section className="w-[80%] md:w-[40%] mx-auto my-4">
			<i onClick={() => navigate('/')}>
				<ArrowIcon className="mb-4 text-3xl font-bold" />
			</i>
			<h2 className="mb-2 text-xl font-bold">Edit Item</h2>
			<form className="flex" onSubmit={editHandler} id="edit-form">
				<input
					type="text"
					className="input w-full grow"
					value={itemName}
					onChange={e => setItemName(e.target.value)}
				/>
				<button className="secondary-button" form="edit-form">
					Save
				</button>
			</form>
		</section>
	);
};

export default Edit;
