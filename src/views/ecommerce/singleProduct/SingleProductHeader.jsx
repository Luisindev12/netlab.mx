import React from "react";
import { Link } from "react-router-dom";

const SingleProductHeader = ({ SingleProductData }) => {
	return (
		<div className='flex items-center gap-3'>
			<Link>
				<div className='bg-slate-200 px-3 py-1 text-xs md:text-sm rounded-full font-semibold'>
					{SingleProductData.category_name}
				</div>
			</Link>
			<Link>
				<div className='bg-slate-200 px-3 py-1 text-xs md:text-sm rounded-full font-semibold'>
					{SingleProductData.product_brand}
				</div>
			</Link>
		</div>
	);
};

export default SingleProductHeader;
