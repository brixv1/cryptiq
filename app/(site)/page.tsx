import Calculator from "../components/Calculator";
import Cryptos from "../components/Cryptos";
import Hero from "../components/Hero";
import Invest from "../components/Invest";
import Newsletter from "../components/Newsletter";
import Statistics from "../components/Statistics";
import WhyUs from "../components/WhyUs";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <WhyUs />
      <Calculator />
      <Cryptos />
      <Invest />
      <Statistics />
      <Newsletter />
    </div>
  );
}
