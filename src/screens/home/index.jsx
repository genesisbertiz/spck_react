import React, { useCallback, useState, memo, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled, { css } from 'styled-components';
import { breakpoint } from '../../../app.jsx'
import _ from 'lodash';
import gsap from 'gsap';
import ScrollTrigger from 'ScrollTrigger';
import locomotive from 'locomotive';
gsap.registerPlugin(ScrollTrigger)


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
  const controls = useAnimation();
  const [toggle, settoggle] = useState(false)
  
  useEffect(() => {
    const locomotiveScroll = new locomotive({
      el: document.querySelector('.smooth-container'),
      smooth: true
    })
    ScrollTrigger.scrollerProxy(".smooth-container", {
      scrollTop(value) {
        return arguments.length
          ? locomotiveScroll.scrollTo(value, 0, 0)
          : locomotiveScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // pinType: centerContainerRef.current.style.transform ? "transform" : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locomotiveScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    gsap.to("#box-4", {
      x: 100,
      duration: 2,
      ease: "bounce",
      delay: 1,
      scrollTrigger: {
        trigger: "#box-4",
        markers: true, 
        // scrub: true, 
        start: 'top center',
        scroller: '.smooth-container'
      }
    });
  }, [])
  const animate = useCallback(() => {
    controls.start(i => ({
      // x: toggle? 0 : 100,
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
  
  
  return <HomeContainer onClick={animate} className="smooth-container">
   {_.range(0,10).map((e, i) => 
    <BoxContainer
    layout
    id={`box-${i}`}
    key={`box-${i}`}
    custom={i}
    animate={controls}/>)}
  </HomeContainer>
}