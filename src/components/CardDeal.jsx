import React, { useState, useRef, useEffect } from 'react'
import gsap, { Power3 } from 'gsap';
import { useIntersection } from 'react-use';
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => {

  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  });


  const slideRightIn = element => {
    gsap.to(
      element,
      {
        duration: 1,
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
        stagger: {
          amount: 1
        }
      })
  };

  const fadeOut = element => {
    gsap.to(
      element,
      {
        duration: 1,
        opacity: 0,
        y: -20,
        ease: Power3.easeOut
      })
  };

  if (intersection && intersection.intersectionRatio > 0.6) {
    slideRightIn('.slideRightIn');
  }

  return (
    <section className={`${layout.section}`} ref={sectionRef}>
      <div className={`${layout.sectionInfo} slideRightIn opacity-0 -translate-x-28`}>
        <h2 className={`${styles.heading2} slideRightIn opacity-0 -translate-x-28`}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 slideRightIn opacity-0 -translate-x-28`}>
          Consectetur excepteur incididunt proident eu aliquip sint ullamco nulla anim culpa ex. Ea consectetur pariatur Lorem ex elit sit est voluptate adipisicing occaecat. Duis excepteur sint non labore id minim.
        </p>
        <Button styles="mt-10 slideRightIn opacity-0 -translate-x-28" />
      </div>
  
      <div className={`${layout.sectionImg} slideRightIn opacity-0 -translate-x-28`}>
        <img src={card} alt="Card" className='w-[1005] h-[100%]' />
      </div>
    </section>
  );
}

export default CardDeal