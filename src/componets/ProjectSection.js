import React from 'react'
import SectionTitle from '../componets/SectionTitle'
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Myprojects from './MyProjects'
import ProjectItem from './ProjectItem' 

// install Swiper modules
SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 22px;
    .container{
      margin-top: 1rem;
    }
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 4rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

export default function ProjectSection() {
    return (
        <ProjectSectionStyle id="projects">
            <div className="container">
                <SectionTitle heading="Projectss" subheading="some of my recent works"/>
                <div className="projects__allItems"> 
                <Swiper 
            spaceBetween={30}
            slidesPerView={2}
            navigation>
                    {Myprojects.map((project,index)=>{

                        return( 
                            <SwiperSlide key={project.id}>
                                <ProjectItem
                                title={project.name}
                                img={project.img}
                                desc={project.desc}
                                />

                            </SwiperSlide>
                        
                        );

                    })}
                </Swiper>

                </div>
            </div>
            
        </ProjectSectionStyle>
    )
}
