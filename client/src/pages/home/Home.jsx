import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="mt-12 flex flex-col items-center gap-7">
        <Featured />
        <h1 style={{ width: "1024px" }}>Browse by property type</h1>
        <PropertyList />
        <h1 style={{ width: "1024px" }}>Home guest love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}
