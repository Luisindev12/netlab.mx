import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const EcomSearchbar = () => {
	return (
		<div className='flex items-center rounded-md border px-1'>
			<div className=''>
				<input
					type='text'
					placeholder='Search Anything'
					className='w-[300px] lg:w-[500px] p-2 focus:outline-none  text-gray-500'
				/>
			</div>
			<div className='text-xl p-1 bg-primary rounded-full text-white duration-300 hover:bg-secondary cursor-pointer'>
				<IoSearchOutline />
			</div>
		</div>
	);
};

export default EcomSearchbar;
