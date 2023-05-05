import { useRef, useState } from 'react';
import { AiOutlinePlus as AddIcon } from 'react-icons/ai';
import { addItem, clearAll } from '../slices/items/itemsSlice';
import { useDispatch } from 'react-redux';

const NewItem = () => {
	const [inputText, setInputText] = useState('');
	const inputRef = useRef('');
	const dispatch = useDispatch();

	const addHandler = e => {
		e.preventDefault();
		if (inputText === '') return false;

		dispatch(addItem(inputText));
		setInputText('');
		inputRef.current.focus();
	};

	return (
		<section>
			<h2 className="text-xl font-bold mb-2">Create Your Todo List</h2>

			<div className="flex">
				<form
					className="w-full flex justify-between items-center"
					onSubmit={addHandler}
				>
					<div className="input grow">
						<input
							type="text"
							className="border-none outline-none"
							autoFocus
							value={inputText}
							onChange={e => setInputText(e.target.value)}
							ref={inputRef}
						/>
						<button className="text-2xl">
							<AddIcon />
						</button>
					</div>
				</form>
				<button
					className="primary-button"
					onClick={() => dispatch(clearAll())}
				>
					Clear
				</button>
			</div>
		</section>
	);
};

export default NewItem;
