import React, { useCallback, useState, memo, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled, { css } from 'styled-components';
import { breakpoint } from '../../../app.jsx'
import _ from 'lodash';
//import gsap from 'gsap';
//import 'gsap-scrollTrigger'


const HomeContainer = styled(motion.div)(props => css``)

const BoxContainer = styled(motion.div)(props => css`
  height: 30vh;
  width: 100vw;
  background: ${props.theme.primary};
  ${breakpoint('xs')({
    background: props.theme.secondary
  })};
  margin-bottom: 2px;
`)

export const Home = (props) => {
  console.log(props)
  const controls = useAnimation();
  const [toggle, settoggle] = useState(false)
  
  useEffect(() => {
    gsap.registerPlugin()
    gsap.to("#box-5", {
      x: 100,
      duration: 2,
      ease: "bounce",
      delay: 1,
      scrollTrigger: {
        trigger: "#box-5",
        markers: true, 
        scrub: true, 
        end: 'top center'
      }
    });
  }, [])
  const animate = useCallback(() => {
    controls.start(i => ({
      x: toggle? 0 : 100,
      background: toggle? '#222126' :'#eaeaea', 
      transition: {
        delay: i * 0.3,
        type: 'spring',
        stiffness: 200,
        duration: 300,
        onComplete: v => {
          console.log('done')
        }
      }, 
     }))
     settoggle(!toggle)
  }, [toggle])
  
  
  return <HomeContainer onClick={animate} >
   {_.range(0,10).map((e, i) => 
    <BoxContainer
    layout
    id={`box-${i}`}
    key={`box-${i}`}
    custom={i}
    animate={controls}/>)}
  </HomeContainer>
}