import { FaTruckFast } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { FaPercentage } from "react-icons/fa";

const FeatureData = [
	{
		id: 1,
		title: "Free Shipping",
		description: "Free shipping over $50",
		icon: <FaTruckFast />,
	},
	{
		id: 2,
		title: "100% Authentic",
		description: "100% Authentic Products",
		icon: <TiTick />,
	},
	{
		id: 3,
		title: "Return Policy",
		description: "30 Days Return Policy",
		icon: <FaPercentage />,
	},
];

export default FeatureData;
