import React from 'react'
import './style.css'
import {BsInfoCircleFill} from 'react-icons/bs';
import { FaDev, FaDatabase } from "react-icons/fa";
import { DiAndroid, DiApple } from "react-icons/di";
import PageHeaderContent from '../../components/PageHeaderContent';
import { Animate } from "react-simple-animate";

const personalDetails = [
  {
    label: "Name",
    value: "Badmus Eniola",
  },
  // {
  //   label: "Age",
  //   value: "18",
  // },
  {
    label: "Address",
    value: "Nigeria",
  },
  {
    label: "Email",
    value: "somodbadmus@gmail.com",
  },
  {
    label: "Contact No",
    value: "+234 8146438621",
  },
];

const About = () => {
  return (
    <section id="about" className='about'>


      <PageHeaderContent
        headerText = "About me"
        icon={<BsInfoCircleFill size={40}/>}
      />
        <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="developerContent">Front End Developer</h3>
            <p>
              Seasoned and independent Front End Developer with 3 years of
              experience in blending the art of design with skill of programming
              to deliver an immersive and engaging user experience through
              efficient website development, proactive feature optimization, and
              relentless debugging. Very passionate about aesthetics and UI
              design. It is imperative that you provide a thorough and
              professional approach to your resume. As a Front End Developer
              you'll be judged by your ability to use UX and UI concepts and
              follow design guidelines. It's about expressing your attention to
              detail and how you can help implement design ideas for your future
              employer.
            </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalDetails.map((item) => (
                <li key={item.label}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple color="#ffdd40" size={60} />
                {/* <p className="service-text">Web Design</p> */}
              </div>
              <div>
                <FaDev color="#ffdd40" size={60} />
                {/* <p className="service-text">Web Development</p> */}
              </div>
              <div>
                <FaDatabase color="#ffdd40" size={60} />
                {/* <p className="service-text">Databases</p> */}
              </div>
              <div>
                <DiAndroid color="#ffdd40" size={60} />
                {/* <p className="service-text">Android Developement</p> */}
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default About;
