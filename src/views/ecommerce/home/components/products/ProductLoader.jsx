import React from "react";

const ProductLoader = () => {
	const rowShadowBox = [
		{
			id: 1,
		},
		{
			id: 2,
		},
		{
			id: 3,
		},
		{
			id: 4,
		},
		{
			id: 5,
		},
		{
			id: 6,
		},
		{
			id: 7,
		},
		{
			id: 8,
		},
		{
			id: 9,
		},
		{
			id: 10,
		},
		{
			id: 11,
		},
		{
			id: 12,
		},
	];
	return (
		<div className='duration-500 flex gap-3 md:gap-5 lg:gap-4 2xl:gap-4 items-center flex-wrap'>
			{rowShadowBox.map((item) => (
				<div
					key={item.id}
					className='animate-pulse relative scale-100 hover:scale-105 duration-300  lg:w-[208.5px] 2xl:w-[200px] 2xl:h-[305.59px] md:w-[212px] w-[180px] border rounded-xl overflow-hidden'>
					<div className='absolute top-2 right-2 z-[999] w-6 h-6 flex justify-center items-center text-lg  cursor-pointer duration-300 hover:bg-secondary hover:text-white p-[0.3rem] text-gray-400 rounded-full bg-slate-50'></div>

					<div className='bg-slate-200 w-full h-[150px] overflow-hidden'></div>

					<div className='flex justify-between items-center mx-2 mt-3'>
						<div className='bg-slate-200 flex justify-center items-center text-xl font-semibold w-[66.19px] h-[28px] rounded-md'>
							<div className='bg-slate-200 mx-2  text-sm w-[45px] h-[15px]'></div>
						</div>
						<div className='w-6 h-6 flex justify-center items-center text-lg  bg-hover  drop-shadow-sm cursor-pointer duration-300 hover:bg-primary hover:text-white p-[0.3rem]  bg-slate-200 rounded-full'></div>
					</div>
					<div className='bg-slate-200 mx-1 mt-6 p-[0.3rem] flex justify-center items-center w-[188.41px] h-[15px]'></div>
					<div className='bg-slate-200 mx-1 mt-2 p-[0.3rem] flex justify-center items-center w-[188.41px] h-[15px]'></div>
					<div className='  mt-4 mb-2 px-[0.5rem] flex justify-between items-center '>
						<div className='bg-slate-200 flex justify-center items-center gap-[0.1rem] px-2 rounded-full text-xs  w-[45px] h-[20px] '></div>
						<div className='bg-slate-200 w-6 h-6 flex justify-center items-center text-lg  drop-shadow-sm cursor-pointer duration-300 p-[0.3rem] rounded-full'></div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductLoader;
