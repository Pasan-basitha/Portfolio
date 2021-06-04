import React from 'react'
import proj1 from '../assets/images/proj1.jpg'
import styled from 'styled-components';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 4px solid var(--gray-2);
    //border: 2px solid var(--gray-1);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 250px;
    }
    .projectItem__info{
      height: 355px;
    }
    
  }
`;

export default function ProjectItem({
    img=proj1,
    title="Project name",
    desc="Description"
}) {
    return (
        <ProjectItemStyles>
            <img className="projectItem__img" src={img} alt="projImg"/>
            <div className="projectItem__info" >
                <h3 className="projectItem__title">{title}</h3>
                <p className="projectItem__desc">{desc} </p>

            </div>
        </ProjectItemStyles>
    )
}
