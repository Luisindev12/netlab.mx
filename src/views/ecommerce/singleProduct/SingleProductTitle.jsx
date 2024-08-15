import React from "react";

const SingleProductTitle = ({ SingleProductData }) => {
	return (
		<div className='mt-5 flex'>
			<p className='text-xl md:text-2xl font-medium'>
				{SingleProductData.product_name}
			</p>
		</div>
	);
};

export default SingleProductTitle;
