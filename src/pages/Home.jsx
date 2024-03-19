import React from "react";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Sector from "../components/Sector";
import FamilyComponent from "../components/FamilyComponent";
import AccordionComponent from "../components/Accordion";
import TimeLine from "../components/TimeLine";
import CardCarousel from "../components/CardCarousel";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Hero />
      <Sector sector="sector" />
      <FamilyComponent />
      <AccordionComponent />
      <TimeLine />
      <CardCarousel />
    </div>
  );
};

export default Home;
