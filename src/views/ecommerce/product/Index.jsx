import React from "react";
import Container from "../../../utils/ecommerce/EcomContainer";
import ProductFilterOptions from "./components/ProductFilterOptions";
import FilterProducts from "./components/Products/FilterProducts";

const Product = () => {
	return (
		<Container>
			<div className='mt-4'>
				<div className='flex gap-x-5'>
					<div className=''>
						<ProductFilterOptions />
					</div>
					<div className='flex-1'>
						<FilterProducts />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Product;
