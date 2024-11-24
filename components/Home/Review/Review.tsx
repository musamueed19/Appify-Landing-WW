'use client'

import { responsive } from "@/constant/Constant";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <div className="py-16 bg-[#fcf6fa]" id="review">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        What client say about us
      </h1>

      <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
              {/* Slider Section */}
              
              <Carousel arrows={false} autoPlay={true} autoPlaySpeed={4000} infinite={true} responsive={responsive} showDots={true}>
                  <ReviewCard name="Jessy Bob" src="/images/c1.png" />
                  <ReviewCard name="Jhone Doe" src="/images/c2.png" />
                  <ReviewCard name="Jhone Doe" src="/images/c2.png" />
              </Carousel>
      </div>
    </div>
  );
};

export default Review;
