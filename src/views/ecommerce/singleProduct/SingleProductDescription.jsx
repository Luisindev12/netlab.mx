import React from "react";
import DOMPurify from "dompurify";
const SingleProductDescription = ({ SingleProductData }) => {
	const sanitaizeHtml = DOMPurify.sanitize(SingleProductData.description);
	return (
		<div className='mt-4 duration-500 text-justify'>
			<div dangerouslySetInnerHTML={{ __html: sanitaizeHtml }} />
		</div>
	);
};

export default SingleProductDescription;
