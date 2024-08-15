import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import BrandData from "./BrandData";

const Brand = () => {
	console.log(BrandData);
	return (
		<div className='mt-10'>
			<Swiper spaceBetween={1} slidesPerView={7}>
				{BrandData.map((item) => {
					return (
						<SwiperSlide key={item.id} className=''>
							<div className='p-0.5 w-[100%] h-[20px] md:h-[40px] flex items-center justify-center duration-300 grayscale-[100%] hover:grayscale-0'>
								<img
									className='max-h-[20px] md:max-h-[40px] w-auto h-full '
									src={item.image_url}
									alt={item.brand_name}
								/>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Brand;
