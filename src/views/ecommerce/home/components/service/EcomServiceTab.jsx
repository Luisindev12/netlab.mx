import React from "react";
import EcomService from "./ecomservice";

const EcomServiceTab = () => {
	return (
		<div className='w-full h-auto flex justify-center items-center px-2 bg-white rounded-b-md'>
			{EcomService.map((item, index) => {
				return (
					<div
						key={index}
						className='flex items-center justify-center gap-2 p-1 sm:p-1 md:p-4 lg:p-4 xl:p-4 2xl:p-4'>
						<div
							className='text-[0.8rem] sm:text-md md:text-[2.3rem] lg:text-[2.3rem] xl:text-[2.3rem] 2xl:text-[2.3rem]'
							style={{
								color: item.color,
							}}>
							{item.icon}
						</div>
						<div className='text-[0.57rem] sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg font-semibold'>
							<p>{item.title}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default EcomServiceTab;
