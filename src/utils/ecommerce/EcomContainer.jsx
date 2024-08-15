import React from "react";

const Container = ({ children }) => {
	return (
		<div className='mx-auto max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] px-[0.5rem] py-2 md:px-[1rem] overflow-x-hidden'>
			{children}
		</div>
	);
};

export default Container;
