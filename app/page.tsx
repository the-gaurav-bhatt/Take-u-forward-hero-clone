import CardList from "./components/HeroSection/CardList";
import HeaderWithCountdown from "./components/HeroSection/HeaderWithCountDown";
import InstructorCard from "./components/HeroSection/InstructorCard";
import TUFCard from "./components/HeroSection/TufCard";
import WhyChooseUs from "./components/HeroSection/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeaderWithCountdown />
      {/* <ThemeSwitch /> */}
      <TUFCard
        imgSrc="/tufImg.png"
        title="Elevate Your Learning Journey with TUF+ Course"
        description="Curated learning, approach-wise solutions, personalized roadmaps, expert doubt assistance, and more!"
        buttonText="Explore Plus"
      />{" "}
      <CardList />
      <WhyChooseUs />
      <InstructorCard />
    </>
  );
}
