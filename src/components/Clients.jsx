import React, { useState, useRef, useEffect } from 'react'
import gsap, { Power3 } from 'gsap';
import { useIntersection } from 'react-use';
import { clients } from '../constants';
import styles from '../style';

const Clients = () => {

  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  });


  const faIn = element => {
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
    faIn('.faIn')
  }
  
  return (
    <section className={`${styles.flexCenter} my-4`} >
      <div className={`${styles.flexCenter} flex-wrap w-full`} ref={sectionRef}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] relative group faIn opacity-0 translate-y-28`}>
            <img src={client.logo} alt="Clients" className="sm:w-[192px] w-[100px] object-contain z-[1]" />
            <div className='absolute -bottom-5 w-full h-1 group-hover:bg-slate-300 rounded-full blur transition-all duration-500 -z-[0]' />
          </div>
        ))}
      </div>
    </section>
  );
}
export default Clients