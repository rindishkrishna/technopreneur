import React from "react";
import ProblemStatement from "../Components/HackathonPage/ProblemStatement/ProblemStatement";
import Prizes from "../Components/HackathonPage/Prizes/Prizes";

export function Hackathonpage(props) {
  return (
    <div id="hackathonPage">
      <h1>Hackathonpage</h1>
      <ProblemStatement />
      <Prizes />
    </div>
  );
}
