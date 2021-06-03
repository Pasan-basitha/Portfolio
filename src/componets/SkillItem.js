import React from 'react'
import styled from 'styled-components'
import PText from './PText'

const SkillItemStyles = styled.div`
 display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 4rem;
  .title {
    font-size: 2.5rem;
    padding-right: 2rem;

  }
  .items {
    display: flex;
    gap: 1.5rem;
    
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

    border-radius: 8px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }

`;

export default function SkillItem({
    title='this is title',
    items=['HTML,CSS']
}) {
    return (
        <SkillItemStyles>
            <h1 className="title">{title}</h1>
            <div className="items">
                {items.map((item,index)=>(
                    <div className="item" key={index}>
                        <PText>{item}</PText>
                    </div>
                ))}
            </div>
        </SkillItemStyles>
    )
}
