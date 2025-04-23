import home1 from '../img/home1.png';
import styled from 'styled-components';

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

const StyledAbout = styled.div`
 min-height: 90vh;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 5rem 10rem;
 color: white;
`
const StyledDescription = styled.div`
flex: 1;
padding-right: 5rem;
h2{
    font-weight: lighter;
}
`

const StyledImage =  styled.div`

flex: 1;
overflow: hidden;

img{
    height: 80vh;
    width: 100%;
    object-fit: cover;
}
`

const StyleHide = styled.div`
overflow: hidden;
`

export default AboutSection;
