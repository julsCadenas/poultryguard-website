'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Modal } from './modal'

// to do list:
// - remove the modal once the paper is ready
// - add a link to the paper in the button once the paper is ready

const Hero = () => {
  const [isModal, setModal] = useState(false)

  return (
    <main className='flex flex-col items-center justify-center text-customWhite pt-20 md:pt-52 gap-8 lg:gap-15'>
      
      {/* title card */}
      <section className='flex flex-col justify-center items-center gap-2 md:gap-4'>
          <p className='font-extrabold font-Inter text-customOrange text-5xl lg:text-9xl md:text-8xl italic' >PoultryGuard</p>
          <p className='font-semibold text-lg md:text-3xl lg:text-4xl' >Heat Stress Monitoring for Poultry</p>
      </section>

      {/* buttons */}
      <section className='flex gap-3 md:gap-5 font-Poppins items-center justify-center'>
          <button
            onClick={() => setModal(true)} 
            className='flex flex-row items-center justify-center gap-2 bg-customWhite text-customBlack p-3 rounded-2xl text-sm md:text-lg font-semibold hover:bg-customOrange transition-all'
            >
            <p>View Paper</p>
            <span className="material-symbols-outlined font-semibold text-lg">
              description
            </span>
          </button>

          <a 
            href='https://github.com/julsCadenas/PoultryGuard' target='_blank' rel='noopener noreferrer' 
            className='flex flex-row items-center justify-center gap-2 bg-customWhite text-customBlack p-3 rounded-2xl text-sm md:text-lg font-semibold hover:bg-customOrange transition-all'
            >
            <p>Source Code</p>
            <span className="material-symbols-outlined">
              code
            </span>
          </a>
      </section>
      
      {/* image */}
      <figure className='mx-5'>
          <Image
            src="/images/poultryguard.png"  
            alt="Poultry"
            width={1210} 
            height={680}
            className="rounded-xl"
          />
      </figure>

      {/* modal component */}
      <Modal
        isOpen = {isModal}
        onClose = {() => setModal(false)}
        title = "Coming Soon"
        message = "The paper is still being finalized and will be available soon. Stay tuned!"
      />

    </main>
  )
}

export default Hero