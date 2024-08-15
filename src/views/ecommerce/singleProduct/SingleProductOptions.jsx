import React from "react";

const SingleProductOptions = ({ SingleProductData }) => {
	const filterProductOptions = (options) => {
		const groupedOptions = {};

		options.forEach((option) => {
			if (!groupedOptions[option.type]) {
				groupedOptions[option.type] = [];
			}
			groupedOptions[option.type].push({
				upgrade: option.upgrade,
				extra_price: option.extra_price,
			});
		});

		return groupedOptions;
	};

	const filteredOptions = SingleProductData?.product_options
		? filterProductOptions(SingleProductData.product_options)
		: {};

	console.log(filteredOptions);

	return (
		<div className='mt-4'>
			{Object.keys(filteredOptions).map((type) => (
				<div className='block md:flex mb-3' key={type}>
					<div className='text-md font-semibold mr-2'>{type}:</div>
					<div className='flex gap-2 flex-wrap'>
						{filteredOptions[type].map((option, index) => (
							<button
								className='flex bg-gray-400/10 cursor-pointer duration-300 hover:bg-hover hover:text-green-500 mb-2 text-gray-400 text-sm px-1 py-[0.2rem] rounded-md font-medium'
								key={index}>
								<p>{option.upgrade}</p>
							</button>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default SingleProductOptions;
