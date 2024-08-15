import React from "react";
import banner1 from "../../../../../../assets/ecommerce/banner/s1.png";
import banner2 from "../../../../../../assets/ecommerce/banner/s2.png";

const BannerTwo = () => {
	return (
		<div className='mt-10 block md:flex justify-center items-center gap-2 rounded-md overflow-hidden'>
			<div className='w-full h-full object-cover mb-3 md:mb-0'>
				<img className='w-full h-full object-cover' src={banner1} alt='' />
			</div>
			<div className='w-full h-full shadow-none hover:drop-shadow-2xl object-cover'>
				<img src={banner2} alt='' />
			</div>
		</div>
	);
};

export default BannerTwo;
