import React from 'react'
import styled from 'styled-components'

const AboutSectionTitleStyles = styled.div`
text-align: center;
  p {
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
  }
  h2 {
    font-family: 'Montserrat Bold';
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle({
    //using props
    subheading='This is subheading', 
    heading='This is heading'
}) {
    
    return (
        <AboutSectionTitleStyles className='section_title'> 
            <p>{subheading}</p> 
            <h2>{heading}</h2>
            
        </AboutSectionTitleStyles>
    )
}
