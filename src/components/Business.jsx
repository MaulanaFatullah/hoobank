import React, { useState, useRef, useEffect } from 'react'
import { useIntersection } from 'react-use';
import styles, { layout } from '../style';
import { features } from '../constants';
import Button from './Button';
import gsap, { Power3 } from 'gsap';

const FeatureCard = ({ icon, title, content, index, fadeIn}) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card ${fadeIn}`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="Icon" className='w-[50%] h-[50%] object-contain' />
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
          {title}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
          {content}
        </p>
      </div>
    </div>
  )
}

const Business = () => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });


  const fadeIn = element => {
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

  if (intersection && intersection.intersectionRatio > 0.1) {
    fadeIn('.fadeIn')
  }

  return (

    <section id='features' className={`${layout.section}`} >
      <div className={`${layout.sectionInfo} fadeIn opacity-0 translate-y-28`} ref={sectionRef}>
        <h2 className={`${styles.heading2} fadeIn opacity-0 translate-y-28`}>
          You do the business,<br className='sm:block hidden' />we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] fadeIn opacity-0 translate-y-28`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>

        <Button styles="mt-10 fadeIn opacity-0 translate-y-28" />
      </div>

      <div className={`${layout.sectionImg} flex-col fadeIn opacity-0 translate-y-28`} ref={sectionRef}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} fadeIn="fadeIn opacity-0 translate-y-28"/>
        ))}
      </div>

    </section >
  );
}


  export default Business;