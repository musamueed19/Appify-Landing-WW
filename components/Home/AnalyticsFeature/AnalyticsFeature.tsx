import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa";

const AnalyticsFeature = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Define Grid */}
      <div className="grid w-[95%] sm:w-[80%] mx-auto grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Content */}
        <div>
          <Image
            src="/images/a.jpg"
            alt="analytics image"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="p-6">
          <h1 className="text-base font-semibold text-orange-500">
            Audience Tracking & Insights
          </h1>

          {/* Headline */}
          <h1 className="my-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Powerful analytics tools that are put you in control and are fully
            customizable
          </h1>

          {/* Description -  */}
          <p className="text-sm text-gray-600 font-medium leading-[2rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            optio quidem blanditiis excepturi pariatur eius. Rem deserunt magni
            ex itaque quo quis iste dignissimos expedita, cum sit tempore
            eligendi est! Lorem, ipsum.
          </p>

          {/* Features List */}
          <ul className="my-7 text-gray-800 space-y-2">
            <li className="feature__li">
              <FaCheckCircle className="text-green-500 mr-2" />
              Chat prompt module supported
            </li>

            <li className="feature__li">
              <FaCheckCircle className="text-green-500 mr-2" />
              Enjoy unlimited features by paid plan
            </li>

            <li className="feature__li">
              <FaCheckCircle className="text-green-500 mr-2" />
              Manage ultimate conversation
            </li>
          </ul>

          {/* Call To Action - Button (Section) */}
          <button className="bg-gray-100 px-8 py-3 rounded-full hover:bg-blue-800 text-gray-800 hover:text-white active:ring-4 active:ring-blue-200 font-semibold">Explore More &rarr;</button>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsFeature