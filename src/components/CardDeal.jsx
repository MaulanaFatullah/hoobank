import React from 'react'
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Consectetur excepteur incididunt proident eu aliquip sint ullamco nulla anim culpa ex. Ea consectetur pariatur Lorem ex elit sit est voluptate adipisicing occaecat. Duis excepteur sint non labore id minim.
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="Card" className='w-[1005] h-[100%]' />
    </div>
  </section>
);

export default CardDeal