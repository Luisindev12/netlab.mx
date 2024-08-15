import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const MobileSearchBar = ({ HideSearchBar }) => {
	return (
		<div className='flex items-center border rounded-md px-2 duration-300'>
			<div className='mx-auto flex gap-3 items-center'>
				<div
					onClick={HideSearchBar}
					className='text-xl w-5 h-5   text-gray-500 duration-300 cursor-pointer'>
					<FaArrowLeft />
				</div>
				<input
					type='text'
					placeholder='Search Anything'
					className=' w-[300px] p-2  focus:outline-none  text-gray-500'
				/>
			</div>
		</div>
	);
};

export default MobileSearchBar;
