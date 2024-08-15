import React from "react";

const SingleProductSpecification = ({ SingleProductData }) => {
	const filterProductsSpecification = (options) => {
		const groupSpecification = {};

		options.forEach((option) => {
			if (!groupSpecification[option.title]) {
				groupSpecification[option.title] = [];
			}
			groupSpecification[option.title].push({
				specification: option.specification,
				value: option.value,
			});
		});
		return groupSpecification;
	};

	const filteredSpecification = SingleProductData?.product_specifications
		? filterProductsSpecification(SingleProductData.product_specifications)
		: {};

	console.log(filteredSpecification);
	return (
		<div>
			<table className='min-w-full bg-white border border-gray-300 p-4'>
				<tbody>
					{Object.keys(filteredSpecification).map((spec) => (
						<tr key={spec} className='border'>
							<td className='px-2 py-1 border font-semibold'>{spec}</td>
							{filteredSpecification[spec].map((specification, index) => (
								<td key={index} className='border px-2 py-1'>
									<p className='font-medium'>
										{specification.specification || ""}:
									</p>
									<p>{specification.value || ""}</p>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default SingleProductSpecification;
