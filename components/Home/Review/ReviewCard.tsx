import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

type Props = {
  name: string;
  src: string;
};

const ReviewCard = ({ name, src }: Props) => {
  return (
    <div className="w-full lg:w-[90%] mx-auto p-6 relative bg-white shadow-lg rounded-lg">
      <div>
        <FaQuoteLeft className="w-14 h-14 absolute opacity-10" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-6">
        {/* Client Description (Text Content) - Section */}
        <div className="col-span-3 order-2 lg:order-1">
          {/* Client Review - Description section */}
          <p className="my-6 text-sm sm:text-base md:text-lg font-medium leading-[1.5rem] sm:leading-[1.8rem] md:leading-[2.5rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ab repellat ullam cum perferendis, est sed nemo temporibus assumenda
            architecto iure commodi modi eius esse impedit voluptatum eos
            accusantium? Rerum?
          </p>

          {/* CLient Rating - Section */}
          <div className="flex items-center">
            <FaStar className="text-yellow-600 h-6 w-6" />
            <FaStar className="text-yellow-600 h-6 w-6" />
            <FaStar className="text-yellow-600 h-6 w-6" />
            <FaStar className="text-yellow-600 h-6 w-6" />
            <FaStar className="text-yellow-600 h-6 w-6" />
          </div>

          {/* Client Name */}
          <div className="mt-8 text-xl font-semibold">{name}</div>
          <div className="mt-2 text-lg text-gray-600 font-medium mb-6">Fullstack Web Developer</div>
        </div>

        {/* Image Content (Client Image) - Section */}
        <div className="col-span-2 flex justify-center items-center order-1 lg:order-2 w-full h-full">
          <Image src={src} width={300} height={300} alt={name} className="object-contain rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
