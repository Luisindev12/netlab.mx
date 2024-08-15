import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Banner from "../../../../../assets/ecommerce/banner/banner-1.jpg";
import Banner3 from "../../../../../assets/ecommerce/banner/banner-2.png";
import BannerMobileTab from "../../../../../assets/ecommerce/banner/bannermobiletab-1.png";
import BannerMobileTab2 from "../../../../../assets/ecommerce/banner/bannermobiletab-2.png";

import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
	return (
		<div>
			<div className='w-full h-auto hidden xl:block 2xl:block lg:block sm:hidden md:hidden'>
				<Swiper
					autoplay={{
						delay: 3000,
					}}
					pagination={true}
					modules={[Autoplay, Pagination]}
					className='w-full h-full'>
					<SwiperSlide>
						<div className='w-full h-full object-cover'>
							<img
								className='w-full h-full object-cover'
								src={Banner3}
								alt='Banner 1'
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide className='w-full h-full'>
						<img
							className='w-full h-full object-cover'
							src={Banner}
							alt='Banner 2'
						/>
					</SwiperSlide>
				</Swiper>
			</div>
			<div className='w-full h-[300px] block md:block lg:hidden xl:hidden 2xl:hidden'>
				<Swiper
					autoplay={{
						delay: 3000,
					}}
					pagination={true}
					modules={[Autoplay, Pagination]}
					className='w-full h-full'>
					<SwiperSlide>
						<div className='w-full h-full object-cover'>
							<img
								className='w-full h-full object-cover'
								src={BannerMobileTab}
								alt='Banner 1'
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide className='w-full h-full'>
						<img
							className='w-full h-full object-cover'
							src={BannerMobileTab2}
							alt='Banner 2'
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Hero;
