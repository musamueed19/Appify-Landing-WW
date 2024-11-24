import AnalyticsFeature from "./AnalyticsFeature/AnalyticsFeature";
import Feature from "./Feature/Feature";
import Hero from "./Hero/Hero";
import Review from "./Review/Review";
import WhyChoose from "./WhyChoose/WhyChoose";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Our Hero Section */}
      <Hero />

      {/* Why Choose Us - Section */}
      <WhyChoose />

      {/* Analytics Feature - Section */}
      <AnalyticsFeature />

      {/* Our Feature - Section */}
      <Feature />

      {/* Client Review - Section */}
      <Review />

      {/* Pricing Section */}
    </div>
  );
}
