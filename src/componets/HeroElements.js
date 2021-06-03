import styled from 'styled-components';

export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
`;

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const VideoBg =styled.video`
width: 100%;
height: 100%;
-o-object-fit:cover;
object-fit: cover;
background:#232a34;
`;

export const HeroContent =styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const HeroSubHeading = styled.div`

color: #fff;
justify-self: flex-start;
font-size: 2rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;

`; 

export const HeroH1 = styled.h1`
color: #fff;
font-size: 60px;
text-align: center;



@media only screen and (max-width:768px){
     font-size: 40px;
    }

 @media only screen and (max-width:768px){
     font-size: 32px;
    }


`;

export const HeroP =styled.p`
margin-top: 24px;
font-family: 'Montserrat SemiBold';
font-size: 25px;
text-align: center;
max-width: 600px;

@media only screen and (max-width:768px){
     font-size: 40px;
    }

 @media only screen and (max-width:768px){
     font-size: 32px;
    }
`;




