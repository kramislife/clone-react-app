import React from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import { Workflow } from "lucide-react";
import Pricing from "./Pricing/Pricing";
import Testimony from "./Testimony/Testimony";

const Home = () => {
  return (
    <>
      <div className="flex flex-grow max-w-7xl mx-auto px-4 lg:pt-20 py-5">
        <Hero />
      </div>
      <Features />
      <Workflow />
      <Pricing />
      <Testimony />
    </>
  );
};

export default Home;
