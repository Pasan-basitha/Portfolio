import React from 'react'
import SectionTitle from '../componets/SectionTitle'
import styled from 'styled-components';
import SkillItem from './SkillItem';

const SkilltSectionStyle = styled.div`
padding: 10rem 0;

.about__info__items {
    margin-top: 15rem;
    
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    
  }
  @media only screen and (max-width:768px){
    
    padding-top: 15px;
    .about__info__items{
      margin-top: 5rem;
    }
    .about__info__heading{
        font-size: 3rem;
    }
  }
`;

export default function SkillSection() {
    return (
        <SkilltSectionStyle id="skills">
            
             <div className="container">
             <SectionTitle heading="My Skills" subheading="what I know"/>
             
             <div className="about__info__items">
                 <div className="about__info_-item">
                     
                     <SkillItem 
                     title="FrontEnd"
                     items={['HTML','CSS','JavaScript','React']}
                     />
                      <SkillItem 
                     title="BackEnd"
                     items={['Node','Express','PHP',]}
                     />
                      <SkillItem 
                     title="Languages"
                     items={['C/C++','Python','Java',]}
                     />
                     <SkillItem 
                     title="Design"
                     items={['Figma','Wireframes']}
                     />
                 </div>
             </div>
             </div>
             
            
            
        </SkilltSectionStyle>
    )
}
