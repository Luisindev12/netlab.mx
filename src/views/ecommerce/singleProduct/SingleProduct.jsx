import React, { useEffect, useState } from "react";
import Container from "../../../utils/ecommerce/EcomContainer";
import { useParams } from "react-router";
import AxiosInstance from "../../../axiosInstance";
import SingleProductImage from "./SingleProductImage";
import SingleProductHeader from "./SingleProductHeader";
import SingleProductTitle from "./SingleProductTitle";
import SingleProductShortDescription from "./SingleProductShortDescription";
import SingleProductPrice from "./SingleProductPrice";
import SingleProductOptions from "./SingleProductOptions";
import SingleProductTab from "./SingleProductTab";
import SingleProductAddtoCart from "./SingleProductAddtoCart";

const SingleProduct = () => {
	const params = useParams();
	const [SingleProductData, setSingleProductData] = useState("");
	const { id } = params;
	useEffect(() => {
		AxiosInstance.get(`/product/eproducts/${id}`)
			.then((res) => {
				setSingleProductData(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);
	console.log(SingleProductData);
	return (
		<Container>
			<div className='grid grid-cols-1 lg:grid-cols-3 h-auto p-5 gap-4 rounded-md shadow-lg mb-5 mt-5 bg-white'>
				<div className=''>
					<SingleProductImage SingleProductData={SingleProductData} />
				</div>
				<div className='col-span-2'>
					<SingleProductHeader SingleProductData={SingleProductData} />
					<SingleProductTitle SingleProductData={SingleProductData} />
					<SingleProductShortDescription
						SingleProductData={SingleProductData}
					/>
					<SingleProductOptions SingleProductData={SingleProductData} />
					<SingleProductPrice SingleProductData={SingleProductData} />
					<SingleProductAddtoCart SingleProductData={SingleProductData} />
				</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-3 h-auto p-5 gap-4 rounded-md shadow-lg mb-5 bg-white'>
				<div className='col-span-2 mt-4'>
					<SingleProductTab SingleProductData={SingleProductData} />
				</div>
				<div></div>
			</div>
		</Container>
	);
};

export default SingleProduct;
