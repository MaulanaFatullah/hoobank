import React from 'react'
import { quotes } from '../assets'

const FeedbackCard = ({ content, name, title, img, fIn }) => (
  <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
    <img src={quotes} alt="Quotes" className={`w-[42px] h-[26px] object-contain ${fIn}`} />
    <p className={`font-poppins font-normal text-[18px] leading-[32px] text-white my-10 ${fIn}`}>
      {content}
    </p>

    <div className='flex flex-row'>
      <img src={img} alt={name} className={`w-[48px] h-[48px] rounded-full ${fIn}`} />

      <div className='flex flex-col ml-4'>
        <h4 className={`font-poppins font-semibold text-[20px] leading-[32px] text-white ${fIn}`}>{name}</h4>
        <p className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ${fIn}`}>
          {title}
        </p>
      </div>
    </div>
  </div>
)

export default FeedbackCard