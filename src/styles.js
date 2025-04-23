import styled from "styled-components";


export const StyledAbout = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
`;

export const StyledDescription = styled.div`
flex: 1;
padding-right: 5rem;
h2{
   font-weight: lighter;
}
`;

export const StyledImage =  styled.div`

flex: 1;
overflow: hidden;

img{
   height: 80vh;
   width: 100%;
   object-fit: cover;
}
`;

export const StyleHide = styled.div`
overflow: hidden;
`;

