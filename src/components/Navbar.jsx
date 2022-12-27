import React, { useState, useRef, useEffect } from 'react'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import gsap, { Power3 } from 'gsap';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  let navMenu = useRef(null);

  useEffect(() => {
    gsap.to(
      navMenu,
      {
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
        duration: .8,
      }
    )
  },[]);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar opacity-0 -translate-y-full' ref={el => { navMenu = el }}>
      <img src={logo} alt="Hoobank" className="w-[124px] h-[32px]" />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt="Menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar