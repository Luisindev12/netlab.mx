import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegHeart } from "react-icons/fa6";
import { MdEuro } from "react-icons/md";
import { LuGitCompare } from "react-icons/lu";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ProductLoader from "./ProductLoader";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

const sanitizeProductName = (name) => {
	return name
		.toLowerCase() // Convert to lowercase
		.replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
		.replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
};

const ProductCard = ({ ProductData }) => {
	const shorterProductTitile = (text, maxLength) => {
		if (text.length <= maxLength) {
			return text;
		}
		return text.substring(0, maxLength) + "...";
	};

	return (
		<div className='mt-[5rem]'>
			<div className='flex justify-between items-center mb-3 '>
				<div>
					<p className='text-md md:text-xl font-medium'>
						Recently Added Products
					</p>
				</div>
				<div className='flex justify-center items-center gap-2 text-primary duration-300 font-medium hover:font-semibold cursor-pointer'>
					<p className=''>View All</p>
					<MdArrowForwardIos />
				</div>
			</div>
			<div className='flex gap-3 md:gap-5 lg:gap-4 2xl:gap-4 items-center flex-wrap'>
				{ProductData.length === 0 ? (
					<>
						<ProductLoader />
					</>
				) : (
					<>
						{ProductData?.slice(35, 47).map((items) => {
							const ProductTitle = shorterProductTitile(items.product_name, 35);
							return (
								<div
									key={items.id}
									className={`relative flex-none basis-[48%] ${
										items.quantity === 0 ? "grayscale-0" : "grayscale-0"
									} md:basis-[31.32%] lg:basis-[23.6%] xl:basis-[18.82%] 2xl:basis-[15.621%] w-full duration-300 h-auto border rounded-md overflow-hidden bg-white`}>
									<div className='absolute top-2 right-2 z-[999] w-6 h-6 flex justify-center items-center text-lg bg-white  drop-shadow-lg cursor-pointer duration-300 hover:bg-secondary hover:text-white p-[0.3rem] text-gray-400 rounded-full '>
										<FaRegHeart />
									</div>
									<Swiper modules={[Autoplay]} autoplay={{ delay: 9000 }}>
										{items.product_images.map((image, index) => (
											<SwiperSlide key={index}>
												<div className=' w-full h-[150px] overflow-hidden'>
													<LazyLoadImage
														src={image.image_url}
														alt={`Product Image ${index + 1}`}
														effect='blur'
													/>
												</div>
											</SwiperSlide>
										))}
									</Swiper>

									<div className='flex justify-between items-center mx-2 mt-3'>
										<div className='flex justify-center items-center text-xl font-semibold text-primary'>
											<div className='mt-1 mb-0'>
												<MdEuro />
											</div>
											<p>{items.price}</p>
											{items.discounted_price !== null && (
												<div className='mx-2 text-gray-400 text-sm flex items-center line-through'>
													<MdEuro />
													<p>{items.discounted_price}</p>
												</div>
											)}
										</div>
										<div className='w-6 h-6 flex justify-center items-center text-lg  bg-hover  drop-shadow-sm cursor-pointer duration-300 hover:bg-primary hover:text-white p-[0.3rem] text-primary rounded-full'>
											<LuGitCompare />
										</div>
									</div>
									<Link
										to={`/product/${items.id}/${sanitizeProductName(
											items.product_name
										)}`}>
										<div className='mt-3 p-[0.3rem] text-center'>
											<p className='text-md font-semibold'>{ProductTitle}</p>
										</div>
									</Link>
									<div className='flex mt-3 mb-2 justify-center items-center gap-1 md:gap-5'>
										<Link
											to={`/product/${items.id}/${sanitizeProductName(
												items.product_name
											)}`}>
											<div className='bg-primary/30 hover:bg-primary hover:text-white rounded-sm text-bg-primary text-primary text-[0.8rem] font-semibold px-2 py-1 cursor-pointer '>
												Buy Now
											</div>
										</Link>
										<Link
											to={`/product/${items.id}/${sanitizeProductName(
												items.product_name
											)}`}>
											<div className='bg-gray-300/80 duration-300 hover:bg-gray-800 rounded-sm text-gray-500 hover:text-white text-[0.8rem] font-medium px-2 py-1 cursor-pointer'>
												Add to Cart
											</div>
										</Link>
									</div>
								</div>
							);
						})}
					</>
				)}
			</div>
		</div>
	);
};

export default ProductCard;
