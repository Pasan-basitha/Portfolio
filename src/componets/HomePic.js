import React from 'react';
import myPic from "../assets/images/myPic.jpg"
import hero from "../assets/images/hero.png"
import PText from './PText';
import styled from 'styled-components';

const MypicStyle = styled.div`
.mypic{
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.mypic__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .mypic__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .mypic__img {
    max-width:  900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .mypic__info {
    margin-top: 1rem;
  }

  @media only screen and (max-width:768px){
     .mypic {
      min-height: 750px;
    }
    .mypic__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .mypic__img {
      height: 300px;
    }
    .mypic__info {
      margin-top: 3rem;
    }
}
  
`;


export default function HomePic() {
    return (
        <MypicStyle>
            <div className="mypic">
            <div className="container">
                <h1 className="mypic__heading">
                    <span>Hello this is</span>
                    <span className="mypic__name">pasan basitha</span>
                </h1>

                <div className="mypic__img">
                    <img src={myPic} alt=""/>

                </div>

                <div className="mypic__info">
                    <PText>I'm a Computer science undergraduate at University of Colombo School of Computing. I live in Homagama and my school was Dharmapala vidyalaya pannipitiya.</PText>

                </div>

            </div>
            </div>
            

            
        </MypicStyle>
    )
}
