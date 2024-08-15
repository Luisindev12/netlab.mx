import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GlobalColor } from "../../../../GlobalColor";
import AxiosInstance from "../../../../axiosInstance";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
	setBrands,
	setCategories,
} from "../../../../hooks/ecommerce/productSlice/productSlice";

const ProductFilterOptions = () => {
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const [data, setData] = useState([]);

	useEffect(() => {
		AxiosInstance.get("product/category-brand")
			.then((res) => {
				setData(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const updateSearchParams = (paramName, value) => {
		const currentParams = searchParams.getAll(paramName);
		const updatedParams = currentParams.includes(value)
			? currentParams.filter((param) => param !== value)
			: [...currentParams, value];

		const newSearchParams = new URLSearchParams(searchParams.toString());
		newSearchParams.delete(paramName);
		updatedParams.forEach((param) => newSearchParams.append(paramName, param));
		setSearchParams(newSearchParams);
	};

	const handleCategoryChange = (category) => {
		updateSearchParams("cat", category);
	};

	const handleBrandChange = (brand) => {
		updateSearchParams("brand", brand);
	};
	useEffect(() => {
		// Get category and brand parameters from URL
		const categories = searchParams.getAll("cat").map((cat) => `&cat=${cat}`);
		const brands = searchParams
			.getAll("brand")
			.map((brand) => `&brand=${brand}`);

		// Dispatch the parameters to the Redux store
		dispatch(setCategories(categories));
		dispatch(setBrands(brands));
	}, [searchParams, dispatch]);
	return (
		<div className='w-full h-auto bg-white p-4 rounded-md'>
			<div>
				<div className='text-lg font-semibold text-center'>Categories</div>
				<hr className='mt-1' />
				{data.length === 0 ? (
					<div>Loading</div>
				) : (
					<>
						{data.categories.map((item, index) => (
							<div key={index} className='flex gap-1 items-center'>
								<div>
									<Checkbox
										onClick={() => handleCategoryChange(item.category_name)}
										sx={{
											color: GlobalColor.PrimaryText,
											"&.Mui-checked": {
												color: GlobalColor.PrimaryText,
											},
										}}
										size='small'
										checked={searchParams
											.getAll("cat")
											.includes(item.category_name)}
									/>
								</div>
								<div className='capitalize'>
									<p>{item.category_name}</p>
								</div>
							</div>
						))}
					</>
				)}
			</div>
			<div className='mt-5'>
				<div className='text-lg font-semibold text-center'>Brand</div>
				<hr className='mt-1' />
				{data.length === 0 ? (
					<div>Loading</div>
				) : (
					<>
						{data.brands.map((item, index) => (
							<div key={index} className='flex gap-1 items-center'>
								<div>
									<Checkbox
										onClick={() => handleBrandChange(item.product_brand)}
										sx={{
											color: GlobalColor.PrimaryText,
											"&.Mui-checked": {
												color: GlobalColor.PrimaryText,
											},
										}}
										size='small'
										checked={searchParams
											.getAll("brand")
											.includes(item.product_brand)}
									/>
								</div>
								<div className='capitalize'>
									<p>{item.product_brand}</p>
								</div>
							</div>
						))}
					</>
				)}
			</div>
		</div>
	);
};

export default ProductFilterOptions;
