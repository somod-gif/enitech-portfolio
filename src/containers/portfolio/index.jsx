import React, { useState } from "react";
import PageHeaderContent from "../../components/PageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import "./style.scss";
import portfolio from "../../images/personal-portfolio.png";
// import ImageTwo from "../../images/pexels-jorge-jesus-614117.jpg";
// import ImageThree from "../../images/pexels-kevin-ku-577585.jpg";
// import ImageFour from "../../images/pexels-karolina-grabowska-4195324.jpg";
// import ImageFive from "../../images/pexels-picjumbocom-196644.jpg";
// import ImageSix from "../../images/pexels-miguel-á-padriñán-68562.jpg";
// import ImageSeven from "../../images/pexels-pixabay-39284.jpg";
// import ImageEight from "../../images/pexels-pixabay-261705.jpg";
// import ImageNine from "../../images/pexels-tirachard-kumtanom-733857.jpg";
// import ImageTen from "../../images/pexels-pixabay-276514.jpg";

const portfolioData = [
  {
    sectionId: 2,
    projectName: "Personal Portfolio",
    projectLink: "",
    image: portfolio,
  },
  {
    sectionId: 2,
    projectName: "E-commerce App",
    projectLink: "",
    // image: ImageTwo,
  },
  {
    sectionId: 2,
    projectName: "Theme App",
    projectLink: "",
    // image: ImageThree,
  },
  {
    sectionId: 3,
    projectName: "Supplier Design App",
    projectLink: "",
    // image: ImageFour,
  },
  {
    sectionId: 3,
    projectName: "TO DO List",
    projectLink: "",
    // image: ImageFive,
  },
  // {
  //   sectionId: 2,
  //   projectName: "Notes Application",
  //   projectLink: "",
  //   // image: ImageSeven,
  // },
  // {
  //   sectionId: 3,
  //   projectName: "ToDo Application",
  //   projectLink: "",
  //   // image: ImageSix,
  // },
  
];

// const filteroptions = [
//   {
//     label: "All",
//     id: 1,
//   },
//   {
//     label: "Development",
//     id: 2,
//   },
//   {
//     label: "Design",
//     id: 3,
//   },
// ];

function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [filterValue, setFiltervalue] = useState(1);

  const updatedPortFolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<AiFillProject size={40} />}
      />
      <div className="portfolio__content">
        {/* <ul className="portfolio__content__filter">
          {filteroptions.map((option) => (
            <li className={option.id === filterValue && 'active'} onClick={() => setFiltervalue(option.id)} key={option.id}>
              {option.label}
            </li>
          ))}
        </ul> */}
        <div className="portfolio__content__cards">
          {updatedPortFolioData.map((item, index) => (
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="portfolio__content__cards__item"
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredIndex && (
                  <div>
                    <p>{item.projectName}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
