import home1 from "../img/home1.png";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyleHide,
} from "../styles";
import Wave from "./Wave";
import { motion } from "framer-motion";
import { titleAnim,fade,photoAnim } from "../animation";

const AboutSection = () => {
  


  // variants={container} initial="hidden" animate="show"

  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div >
          <StyleHide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </StyleHide>
          <StyleHide>
            <motion.h2 variants={titleAnim}>
              Your <span> dreams</span>
            </motion.h2>
          </StyleHide>
          <StyleHide>
            <motion.h2 variants={titleAnim}>comse true.</motion.h2>
          </StyleHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={home1} alt="" />
      </StyledImage>
      <Wave/>
    </StyledAbout>
  );
};

// Style Here

export default AboutSection;
