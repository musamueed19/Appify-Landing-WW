import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="py-16 bg-[#f3fcfe]" id="price">
      <h2 className="mt-6 text-2xl md:text-3xl text-center capitalize font-bold">
        Meet exciting Pricing Plans
      </h2>

      <div className="mt-20 w-[92%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Free Plan */}
        <div  data-aos="fade-up" data-aos-anchor-placement="top-center">
          <PriceCard price={15} plan="Starter" />
        </div>

        {/* Paid Plan */}
        <div  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <PriceCard price={45} plan="Business" />
        </div>
      </div>
    </div>
  );
};

export default Price;
