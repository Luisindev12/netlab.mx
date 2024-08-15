import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import AxiosInstance from "../../../../../axiosInstance";
import TopSellingProducts from "../topsellingproducts/TopSellingProducts";
import NewArialProducts from "../newarival/NewArialProducts";
import BannerTwo from "../banner/two/BannerTwo";
import BannerLong from "../banner/long/BannerLong";

const Products = () => {
	const [ProductData, setProductData] = useState([]);
	useEffect(() => {
		AxiosInstance.get("/product/eproducts")
			.then((res) => {
				setProductData(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div className='mb-5'>
			<ProductCard ProductData={ProductData} />
			<BannerTwo />
			<TopSellingProducts ProductData={ProductData} />
			<BannerLong />
			<NewArialProducts ProductData={ProductData} />
		</div>
	);
};

export default Products;
