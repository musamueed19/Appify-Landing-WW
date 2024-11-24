import { priceFeatures } from "@/constant/Constant";
import { FaCheck } from "react-icons/fa";

type Props = {
  price: number;
  plan: string;
};

const PriceCard = ({ price, plan }: Props) => {
  return (
    <div className="bg-white py-12 px-8 rounded-lg shadow-lg">
      <p className="mt-8 text-xl font-semibold text-blue-600 text-center">
        {plan} Plan
      </p>

      <div className="font-medium text-3xl mt-4 text-center">
        $<span className="text-5xl font-bold">{price}</span>/mo
      </div>

      <p className="mt-2 text-gray-600 text-center font-medium">Per user</p>

      <div className="my-10">
        {priceFeatures.map((item, index) => (
          <div className="text-center mb-4 flex items-center space-x-3" key={index}>
            <div className="text-center w-8 h-8 bg-gray-300/70 flex flex-col items-center justify-center rounded-full">
              <FaCheck className="text-green-500" />
            </div>
            <p className="text-sm font-semibold text-gray-700 capitalize">
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* Call To Action - Button Section */}
      <button type="button" className="text-base md:text-lg text-center w-full rounded-sm font-bold bg-blue-900 text-white py-4 hover:bg-blue-950 transition-all duration-200">
        Start 14 Days Free Trial
      </button>
    </div>
  );
};

export default PriceCard;
