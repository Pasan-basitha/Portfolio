import React from 'react'
import SectionTitle from '../componets/SectionTitle'
import * as FaIcons from 'react-icons/fa';
import styled from 'styled-components';

const ContactSectionStyle = styled.div`
padding: 10rem 0;

.container{
    display: flex;

    //align-items: center;
    //justify-content: flex-start;
    //text-align: left;
    margin-top: 8rem;
    gap: 62rem;
    
    
}



.left.icons{
    margin: 10px 0;
}

.row{
    display: flex;
    height: 65px;
    align-items: center;
    margin-top: 20px;
    font-size: 20px;
}

.info{
    margin-left: 30px;
}

.one-icon{
    font-size: 25px;
    counter-reset: crimson;
}

.head{
    font-size: 25px;
}
.sub-title{
    color: #333;
}



@media only screen and (max-width: 968px) {
   
padding-top: 24px;
.container{
    flex-direction: column;
    text-align: center;
    gap: 5rem;
    margin-top: 5rem;
}


.column-left,.column-right
{
flex: 3;
 width: 100%;
}


.info,.one-icon{
    flex-direction: column;
    text-align: center;
}

}

`;

export default function ContactSection() {
    return (
        <ContactSectionStyle id="contact">
              <SectionTitle heading="Contact Me" subheading="get in touch"/>
            <div className="container">
          
        
            
            <div className="column-left">

            <div className="icons">
               <div className="row">
                   
                   <div className="one-icon">
                   <i><FaIcons.FaUser/></i>
                   </div>
                  
                   <div className="info">
                   <div className="head">Name</div>
                   <div className="sub-tittle">Pasan basitha</div>
                   </div>
               </div>
               <div className="row">
                   
                   <div className="one-icon">
                   <i><FaIcons.FaMapMarkerAlt/></i>
                   </div>
                   <div className="info">
                   <div className="head">Address</div>
                   <div className="sub-tittle">43,Kadawatha Rd,Kalubowila</div>
                   </div>
               </div>
               <div className="row">
                  
                   <div className="one-icon">
                   <i><FaIcons.FaEnvelope/></i>
                   </div>
                   <div className="info">
                   <div className="head">Email</div>
                   <div className="sub-tittle">pasanbasitha9733@gmail.com</div>
                   </div>
               </div>
               <div className="row">
                   
                   <div className="one-icon">
                   <i><FaIcons.FaPhoneSquareAlt/></i>
                   </div>
                   <div className="info">
                   <div className="head">Phone</div>
                   <div className="sub-tittle">+94771222541</div>
                   </div>
               </div>
           </div>

            </div>

            <div class="column-right">
                        <div class="icons">
                            <div class="row">

                                  <div className="one-icon">
                                <i><FaIcons.FaLinkedin/></i>
                                </div>
                                <div class="info">
                                    <div class="head"><a href="https://www.linkedin.com/in/pasan-basitha-474972188/" className="link">LinkedIn</a></div>
                                </div>
                            </div>
                            <div class="row">
                              
                            <div className="one-icon">
                                <i><FaIcons.FaFacebookSquare/></i>
                                </div>
                                <div class="info">
                                    <div class="head"><a href="https://www.facebook.com/pasan.basitha.52" className="link">Facebook</a></div>
                                </div>
                            </div>
                            <div class="row">
                                
                            <div className="one-icon">
                                <i><FaIcons.FaTwitterSquare/></i>
                                </div>
                                <div class="info">
                                    <div class="head"><a href="https://twitter.com/basitha_pasan" className="link">Twitter</a></div>
                                </div>
                            </div>
                            <div class="row">
                                
                            <div className="one-icon">
                                <i><FaIcons.FaGithub/></i>
                                </div>
                                <div class="info">
                                    <div class="head"><a href="https://github.com/Pasan-basitha" className="link">Github</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    </div>

            
        </ContactSectionStyle>
    )
}
