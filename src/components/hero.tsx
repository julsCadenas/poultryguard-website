import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <main className='flex flex-col items-center justify-center text-customWhite pt-20 md:pt-52 gap-8 md:gap-15'>
      
      {/* title card */}
      <section className='flex flex-col justify-center items-center gap-2 md:gap-4'>
          <p className='font-extrabold font-Inter text-customOrange text-5xl md:text-9xl italic' >PoultryGuard</p>
          <p className='font-semibold text-lg md:text-4xl' >Heat Stress Monitoring for Poultry</p>
      </section>

      {/* buttons */}
      <section className='flex gap-3 md:gap-5 font-Poppins items-center justify-center'>
          <button className='flex flex-row items-center justify-center gap-2 bg-customWhite text-customBlack p-3 rounded-2xl text-sm md:text-lg font-semibold hover:bg-customOrange transition-all'>
            <p>View Paper</p>
            <span className="material-symbols-outlined font-semibold text-lg">
              code
            </span>
          </button>

          <button className='flex flex-row items-center justify-center gap-2 bg-customWhite text-customBlack p-3 rounded-2xl text-sm md:text-lg font-semibold hover:bg-customOrange transition-all'>
            <p>Source Code</p>
            <span className="material-symbols-outlined">
              description
            </span>
          </button>
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

    </main>
  )
}

export default Hero