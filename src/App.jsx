import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 lg:pt-20 py-5">
        <Hero />
      </div>
    </>
  );
};

export default App;
