import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {  useLocation } from "react-router-dom";
import { MovieState } from "../movieState";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {

  const location = useLocation();
  const url = location.pathname;
  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);

    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
  <>
  {movie && (
        <Details exit="exit" variants={pageAnimation} initial='hidden' animate='show'>
        <HeadLine>
          <h2>{movie.title}</h2>
          <img src={movie.mainImg} alt="" />
      </HeadLine>
      <Awards>
        {movie.awards.map((award) => (
            <Award key={award.title} title={award.title} description={award.description}/>
        ))}
      </Awards>
      <ImageDisplay>
        <img src={movie.secondaryImg} alt="movie" />
      </ImageDisplay>
      </Details>
  )}
  </>

  );
};










const Details = styled(motion.div)`
color: white;
`;

const HeadLine = styled.div`
min-height: 90vh;
padding-top: 20vh;
position: relative;
h2{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 10%);
}
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`;

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;

const StyledAwards = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    .p{
        padding: 2rem 0rem;
    }
`;

const ImageDisplay = styled.div`
min-height: 50vh;
img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
`






const Award = ({title, description}) =>{
    return(
        <StyledAwards>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAwards>
    )
}

export default MovieDetail;
