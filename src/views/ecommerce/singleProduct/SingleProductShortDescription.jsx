import React from "react";
import DOMPurify from "dompurify";
const SingleProductShortDescription = ({ SingleProductData }) => {
	const sanitizedHTML = DOMPurify.sanitize(SingleProductData.description_short);
	return (
		<div className='mt-4'>
			<div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
		</div>
	);
};

export default SingleProductShortDescription;
