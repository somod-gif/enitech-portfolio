import React from "react";
import PageHeaderContent from '../../components/PageHeaderContent';
import { AiFillProject } from "react-icons/ai";

const portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<AiFillProject size={40} />}
      />
    </section>
  );
};

export default portfolio;
