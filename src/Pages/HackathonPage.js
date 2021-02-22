import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../Components/HackathonPage/Navbar/Navbar";
import TopSection from "../Components/HackathonPage/TopSection/TopSection";
import ProblemStatement from "../Components/HackathonPage/ProblemStatement/ProblemStatement";
import Prizes from "../Components/HackathonPage/Prizes/Prizes";
import Faqs from "../Components/HackathonPage/FAQ/Faq";
import Sponsors from "../Components/HackathonPage/Sponsors/Sponsors";

export function Hackathonpage(props) {
  return (
    <div id="hackathonPage">
      <BrowserRouter>
      <Navbar />
      </BrowserRouter>
      <TopSection />
      <ProblemStatement />
      <Prizes />
      <Faqs />
      <Sponsors />
    </div>
  );
}
