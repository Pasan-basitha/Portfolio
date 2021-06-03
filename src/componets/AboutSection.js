import React from 'react'
import SectionTitle from './SectionTitle'
import PText from './PText'
import prof2 from "../assets/images/prof2.jpg"
import styled from 'styled-components'

const AboutSectionStyle = styled.div`
padding: 10rem 0;
.container{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
}
.section_title{
    text-align: left;
}


.aboutSection__right{
    max-width:  600px;
    width: 80%;
    height: 380px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
    
}

@media only screen and (max-width: 768px) {

    .container{
        flex-direction: column;
        text-align: center;
    }
    
    .aboutSection__left,.aboutSection__right {
     flex: 3;
     width: 100%;
     
    }

    .section_title{
        text-align: center;
    }
   
  }

`;

export default function AboutSection() {
    return (
        <AboutSectionStyle id="about">
            <div className="container">
              <div className="aboutSection__left">
                  <SectionTitle 
                   subheading="Let me introduce myself"
                   heading="About me"/>
                     
                  
                  <PText>I'm from Kalubowila, Sri Lanka. Since my childhood I love to do innovative things. 
                       I went to Isipathana College and currently
                        I'm a Computer science undergraduate at University of Colombo School of Computing.
                        I’m passionate about software development, cloud computing and DevOps.
                      

                  </PText>

              </div>

              <div className="aboutSection__right">
                  <img src={prof2} alt=""/>

              </div>
            </div>

            
        </AboutSectionStyle>
    )
}
