import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const EcomService = [
	{
		id: 1,
		title: "Fastest Delivery",
		icon: <FaShippingFast />,
		color: "#ff3636",
	},
	{
		id: 2,
		title: "24/7 Customer Support",
		icon: <MdOutlineSupportAgent />,
		color: "#ffb836",
	},
	{
		id: 3,
		title: "100% Secure Payment",
		icon: <RiSecurePaymentFill />,
		color: "#4386ff",
	},
	{
		id: 4,
		title: "Product Quality Checked",
		icon: <IoShieldCheckmarkSharp />,
		color: "#36cd9c",
	},
];

export default EcomService;
