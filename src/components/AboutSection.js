import home1 from "../img/home1.png";
// import styled from 'styled-components';

import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyleHide,
} from "../styles";
const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyleHide>
            <h2>We work to make</h2>
          </StyleHide>
          <StyleHide>
            <h2>
              Your <span> dreams</span>
            </h2>
          </StyleHide>
          <StyleHide>
            <h2>comse true.</h2>
          </StyleHide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="" />
      </StyledImage>
    </StyledAbout>
  );
};

// Style Here

export default AboutSection;
