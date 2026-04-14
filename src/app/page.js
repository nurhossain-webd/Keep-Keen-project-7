import Banner from "@/Components/Home/Banner";
import FrindCardsGrid from "@/Components/Home/FrindCardsGrid";
import SummaryCards from "@/Components/Home/SummaryCards";


export default function Home() {
  return (
    <div className="w-10/12 mx-auto">
      <Banner />
      <SummaryCards />
      <FrindCardsGrid />

    </div>
  );
}
