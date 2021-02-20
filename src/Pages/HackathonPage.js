import React from "react";
import ProblemStatement from "../Components/HackathonPage/ProblemStatement/ProblemStatement";
import Prizes from "../Components/HackathonPage/Prizes/Prizes";
import Faqs from "../Components/HackathonPage/FAQ/Faq";
import Sponsors from "../Components/HackathonPage/Sponsors/Sponsors";

export function Hackathonpage(props) {
  return (
    <div id="hackathonPage">
      <h1>Hackathonpage</h1>
      <ProblemStatement />
      <Prizes />
      <Faqs />
      <Sponsors />
    </div>
  );
}
