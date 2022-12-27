import React, { useRef, useEffect, createRef } from 'react'
import { stats } from '../constants'
import styles from '../style'
import gsap, { Power3, Bounce } from 'gsap';


const Stats = (props) => {
  const lineRefs = useRef([]);

  lineRefs.current = stats.map((_, i) => lineRefs.current[_.id] ?? createRef());
  let statsComp = useRef(null);

  useEffect(() => {
    gsap.to(
      lineRefs.current[0],
      {
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
        duration: .8,
        delay: .2,
      }
    )
    gsap.to(
      lineRefs.current[1],
      {
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
        duration: .8,
        delay: .4,
      }
    )
    gsap.to(
      lineRefs.current[2],
      {
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
        duration: .8,
        delay: .6,
      }
    )
  }, []);
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat, i) => (
        <div key={stat.id} ref={el => lineRefs.current[i] = el} className={`flex-1 flex flex-row justify-start items-center m-3 opacity-0 translate-y-full`} >
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
            {stat.value}
          </h4>
          <p className='font-poppins font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-white text-gradient uppercase ml-3'>
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  )
}
export default Stats