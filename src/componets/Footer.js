import React from 'react'
import PText from './PText'
import styled from 'styled-components'

const FooterStyle = styled.div`

  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }

  .txt{
    max-width: 600px;
margin: 0 auto;
font-size: 1.8rem;
line-height: 1.3em;
margin-top: 2rem;

  }
  
  
  .copyright {
    background-color: var(--deep-dark);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width:768px){
    font-size: 1.4rem;
}
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;


export default function () {
    return (
        <FooterStyle>
            <div className="copyright">
                <div className="container">
                    <div className="txt">
                             
                    Created By Pasan Basitha |  2021 All rights reserved.
                    </div>
                  

                </div>

            </div>
            
        </FooterStyle>
    )
}
