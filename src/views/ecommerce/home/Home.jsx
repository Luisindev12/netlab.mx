import React from "react";
import Container from "../../../utils/ecommerce/EcomContainer";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import EcomServiceTab from "./components/service/EcomServiceTab";

const Home = () => {
	return (
		<div className=''>
			<Container>
				<Hero />
				<EcomServiceTab />
				<Products />
			</Container>
		</div>
	);
};

export default Home;
