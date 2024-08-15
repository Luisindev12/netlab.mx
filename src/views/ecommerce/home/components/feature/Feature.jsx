import React from "react";
import FeatureData from "./FeatureData";
import { IoMdSettings } from "react-icons/io";

const Feature = () => {
	return (
		<div className='flex gap-2 flex-wrap md:flex-nowrap md:gap-3 lg:gap-12 2xl:gap-12 mt-10 mb-3 px-2 overflow-hidden'>
			{FeatureData.map((items) => {
				return (
					<div
						key={items.id}
						className='w-[175px] h-[70px] md:w-[280px] md:h-[80px] duration-300  scale-100 hover:scale-105   flex justify-between items-center rounded-lg p-4 text-start bg-hover gap-3'>
						<div className='w-8 h-8 p-2 flex items-center justify-center text-lg text-white rounded-full bg-secondary'>
							{items.icon}
						</div>
						<div className=''>
							<p className='text-sm md:text-md font-semibold'>{items.title}</p>
							<p className='text-xs block lg:block 2xl:block md:hidden'>
								{items.description}
							</p>
						</div>
					</div>
				);
			})}
			<div className='border w-[175px] h-[70px] md:w-[280px] md:h-[80px]  lg:w-[280px] lg:h-[80px] 2xl:w-[280px] 2xl:h-[80px] shadow-sm flex justify-between items-center rounded-lg p-4 bg-hover hover:bg-secondary duration-300 hover:text-white  gap-3'>
				<div className='w-8 h-8 animate-spin-slow p-2 flex items-center justify-center text-lg text-white rounded-full bg-secondary'>
					<IoMdSettings />
				</div>
				<div className=''>
					<p className='text-sm md:text-md lg:text-md 2xl:text-md font-semibold'>
						Get A Repair Service
					</p>
					<p className='text-xs'>items.description</p>
				</div>
			</div>
		</div>
	);
};

export default Feature;
