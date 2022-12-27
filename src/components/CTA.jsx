import React, { useState, useRef, useEffect } from 'react'
import gsap, { Power3 } from 'gsap';
import { useIntersection } from 'react-use';
import styles from '../style';
import Button from './Button';

const CTA = () => {

  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  });


  const fDown = element => {
    gsap.to(
      element,
      {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
        stagger: {
          amount: 1
        }
      })
  };

  if (intersection && intersection.intersectionRatio > 0.8) {
    fDown('.fDown')
  }

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow fDown opacity-0 -translate-y-28`} ref={sectionRef}>
      <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.heading2} fDown opacity-0 -translate-y-28`}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 fDown opacity-0 -translate-y-28`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
  
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 fDown opacity-0 -translate-y-28`}>
        <Button />
      </div>
    </section>
  );
}


export default CTA