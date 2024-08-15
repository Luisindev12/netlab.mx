import React, { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
const SingleProductImage = ({ SingleProductData }) => {
	const [MainImage, setMainImage] = useState("");
	useEffect(() => {
		if (SingleProductData?.main_image) {
			setMainImage(SingleProductData.main_image);
		}
	}, [SingleProductData]);
	console.log(MainImage);
	return (
		<div>
			<div className='w-full h-full'>
				<div className='w-full h-full object-cover rounded-lg overflow-hidden'>
					<img className='w-full h-full object-cover' src={MainImage} alt='' />
				</div>

				<div>
					{SingleProductData.length === 0 ? (
						<div>
							<h1>Loading.....</h1>
						</div>
					) : (
						<Swiper
							spaceBetween={10}
							slidesPerView={4}
							autoplay={{
								delay: 5000,
							}}
							modules={[Navigation, Autoplay]}>
							{SingleProductData.product_images.map((items, index) => (
								<SwiperSlide key={index}>
									<div className='w-[80px] h-[80px] object-cover cursor-pointer border mt-5 rounded-sm'>
										<img
											className='w-full h-full object-cover'
											src={items.image_url}
											alt=''
											onClick={() => setMainImage(items.image_url)}
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					)}
				</div>
			</div>
		</div>
	);
};

export default SingleProductImage;
