import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Home/Hero/Hero";
import Features from "./components/Home/Features/Features";
import Workflow from "./components/Home/Workflow/Workflow";
import Pricing from "./components/Home/Pricing/Pricing";
import Testimony from "./components/Home/Testimony/Testimony";
import Footer from "./components/Home/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Experience from "./components/Experience/Experience";
import Community from "./components/Community/Community";
import News from "./components/News/News";
import Faq from "./components/Faq/Faq";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/community" element={<Community />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;
