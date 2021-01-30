import React, { useCallback, useState, memo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled, { css } from 'styled-components';
import { breakpoint } from '../../../app.jsx'
import _ from 'lodash';


const HomeContainer = styled(motion.div)(props => css``)

const BoxContainer = styled(motion.div)(props => css`
  height: 20px;
  width: 20px;
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
   {_.range(0,3).map((e, i) => 
    <BoxContainer
    layout
    key={`box-${i}`}
    custom={i}
    animate={controls}/>)}
  </HomeContainer>
}