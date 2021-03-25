import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "./Faqs.css";
const items = [
  {
    uuid: 1,
    heading: "Who can attend?",
    content:
      "Current students of any college of India as well as working professionals.",
  },
  {
    uuid: 2,
    heading: "What is the team size?",
    content:
      "You can have a team with minimum size of 2 members and maximum of 4 members.",
  },
  {
    uuid: 3,
    heading: "How much does it cost?",
    content:
      "This event is completely free! We’ll provide you with a plethora of resources and tools to hack with.",
  },
];
const Faqs = () => {
  return (
    <div className="container" id="faq">
      <h3 className="headings faqs">FAQ</h3>
      <div className="faq-text">
        <Accordion preExpanded={[1, 2]} allowMultipleExpanded>
          {items.map((item) => (
            <AccordionItem key={item.uuid}>
              <AccordionItemHeading>
                <AccordionItemButton>{item.heading}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{item.content}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
