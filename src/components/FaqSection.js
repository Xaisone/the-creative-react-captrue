import styled from "styled-components";
import { StyledAbout } from "../styles";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion";
import { scrollReveal } from "../animation";
import { UseScroll } from "./useScroll";



const FaqSection = () => {
  
  const [element,controls] = UseScroll()

  return (
    <Faq variants={scrollReveal} animate={controls} initial='hidden' ref={element}>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <LayoutGroup>
      <Toggle title="How Do I Start">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet</p>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            temporibus eius assumenda neque ea eveniet nemo dolores? Fuga, odio
          </p>
        </div>
        
      </Toggle>
      <Toggle title="Daylies">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            temporibus eius assumenda neque ea eveniet nemo dolores? Fuga, odio
          </p>
        </div>
      </Toggle>
      <Toggle title="Diferrent Payment Methode">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            temporibus eius assumenda neque ea eveniet nemo dolores? Fuga, odio
          </p>
        </div>
      </Toggle>
      <Toggle title="What Product Do You Offer">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            temporibus eius assumenda neque ea eveniet nemo dolores? Fuga, odio
          </p>
        </div>
      </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(StyledAbout)`
display: block;
span{
  display: block;
}
h2{
  padding-bottom: 2rem;
  font-weight: lighter;
}
.faq-line{
  background: #cccccc;
  height: 0.2rem;
  margin: 2rem 0rem;
  width: 100%;
}
.question{
  padding: 3rem 0rem;
  cursor: pointer;
}
.answer{
  padding: 2rem 0rem;
  p{
    padding: 1rem 0rem;
  }
}
`;

export default FaqSection;