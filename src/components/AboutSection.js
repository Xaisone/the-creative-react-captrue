import home1 from "../img/home1.png";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyleHide,
} from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  // const titleAnim = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1, transition: { duration: 3 } },
  // };

  // const container = {
  //   hidden: { x: 100 },
  //   show: {
  //     x: 0,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeOut",
  //       staggerChildren: 1,
  //       when: "afterChildren",
  //     },
  //   },
  // };

  // variants={container} initial="hidden" animate="show"

  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div >
          <StyleHide>
            <motion.h2 >We work to make</motion.h2>
          </StyleHide>
          <StyleHide>
            <motion.h2 >
              Your <span> dreams</span>
            </motion.h2>
          </StyleHide>
          <StyleHide>
            <motion.h2 >comse true.</motion.h2>
          </StyleHide>
        </motion.div>
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
