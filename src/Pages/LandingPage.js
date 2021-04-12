import React, { useState } from "react";
import TopSection from "../Components/LandingPage/TopSection/TopSection";
import Sponsors from "../Components/LandingPage/Sponsors/Sponsors";
import Events from "../Components/LandingPage/Events/Events";

import AboutComponent from "../Components/LandingPage/About/About";
import ContactUs from "../Components/LandingPage/ContactUs/ContactUs";
import ReactPageScroller from 'react-page-scroller';

export function Landingpage(props) {
  const [currentPage, setCurrentPage] = useState(null)

  const handlePageChange = (number) => {
    setCurrentPage(number);
  }

  const handleBeforePageChange = (number) => {
    console.log(number);
  }

  return (
    <>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <TopSection />    
        <AboutComponent/>
        <Events />
        <Sponsors />
        <ContactUs/>
      </ReactPageScroller>
    </>
  );
}