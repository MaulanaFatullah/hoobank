import React, { useRef, useEffect } from 'react'
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

import gsap, { Power3, Bounce } from 'gsap';

const Hero = () => {
  let headingHero = useRef(null);
  let theNext = useRef(null);
  let generation = useRef(null);
  let payment = useRef(null);
  let getStarted = useRef(null);
  let heroParagraph = useRef(null);
  let heroRobotImg = useRef(null);
  let bgGradientOne = useRef(null);
  let bgGradientTwo = useRef(null);
  let bgGradientThree = useRef(null);

  useEffect(() => {
    gsap.to(
      headingHero,
      {
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
        duration: .8,
        delay: .2,
      }
    )
    gsap.to(
      theNext,
      {
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
        duration: .8,
        delay: .4,
      }
    )
    gsap.to(
      generation,
      {
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
        duration: .8,
        delay: .6,
      }
    )
    gsap.to(
      payment,
      {
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
        duration: .8,
        delay: .8,
      }
    )
    gsap.to(
      heroParagraph,
      {
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
        duration: .8,
        delay: 1,
      }
    )
    gsap.to(
      heroRobotImg,
      {
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
        duration: .8,
        delay: 1,
      }
    )
    gsap.to(
      getStarted,
      {
        opacity: 1,
        scale: 1,
        ease: Bounce.easeOut,
        duration: 1,
        delay: 1.2,
      }
    )
    gsap.to(
      bgGradientOne,
      {
        opacity: 1,
        scale: 1,
        ease: Power3.easeOut,
        duration: 1,
        delay: .8,
      }
    )
    gsap.to(
      bgGradientTwo,
      {
        opacity: 1,
        scale: 1,
        ease: Power3.easeOut,
        duration: 1,
        delay: 1,
      }
    )
    gsap.to(
      bgGradientThree,
      {
        opacity: 1,
        scale: 1,
        ease: Power3.easeOut,
        duration: 1,
        delay: 2,
      }
    )
  }, []);

  return (
    <section
      id='home'
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
        <div
          className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 opacity-0 -translate-x-20'
          ref={el => { headingHero = el }}>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20%</span> Discount for {""}
            <span className='text-white'>1 Month</span> Account
          </p>
        </div>

        <div
          className='flex flex-row justify-between items-center w-full'
        >
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] opacity-0 -translate-x-20' ref={el => {theNext = el}}>
            The Next<br className='sm:block hidden' /> {" "}
            <span className='text-gradient opacity-0 -translate-x-20' ref={el => { generation = el }}>Generation</span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0 opacity-0 scale-0'
          ref={el => { getStarted = el }}>
            <GetStarted />
          </div>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full opacity-0 -translate-x-20'
          ref={el => { payment = el }}>
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 opacity-0 -translate-x-20`} 
          ref={el => { heroParagraph = el }}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="Billing" className='w-[100%] h-[100%] relative z-[5] bg-opacity-0 opacity-0 translate-x-20' 
          ref={el => { heroRobotImg = el }} />
        
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient opacity-0 scale-0' 
          ref={el => { bgGradientOne = el }} />
        <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full opacity-0 scale-50' 
          ref={el => { bgGradientTwo = el }} />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient opacity-0 scale-75' 
          ref={el => { bgGradientThree = el }} />
      </div>

      <div className={`ss:hidden ${styles.flexCenter} `}>
        <GetStarted />
      </div>
    </section>
  );
}

export default Hero