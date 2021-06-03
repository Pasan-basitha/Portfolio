import React from 'react'
import { HeroContainer,HeroBg, VideoBg, HeroContent, HeroH1, HeroP,HeroSubHeading } from './HeroElements'
import video from '../assets/videos/video.mp4'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
            </HeroBg>
           <HeroContent>
               <HeroSubHeading>Hello,my name is</HeroSubHeading>
               <HeroH1>Pasan Basitha</HeroH1>
               <HeroP>I'm a Computer science undergraduate at University of Colombo School of Computing. </HeroP>
           </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
