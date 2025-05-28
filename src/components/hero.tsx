import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <main className='flex flex-col items-center justify-center text-customWhite pt-52 gap-5'>
        <section className='flex flex-col justify-center items-center gap-4'>
            <p className='font-extrabold font-Inter text-customOrange text-9xl italic' >PoultryGuard</p>
            <p className='font-semibold text-4xl' >Heat Stress Monitoring for Poultry</p>
        </section>
        <figure>
            <Image
            src="/images/poultryguard.png"  
            alt="Poultry"
            width={1210} 
            height={680}
            className="rounded-lg mt-6"
            />
        </figure>
    </main>
  )
}

export default Hero