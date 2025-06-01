'use client'
import React, { useState } from 'react'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='fixed text-customWhite font-Poppins w-5/6 px-6 py-6 mb-3 rounded-3xl bg-customBlack/70 backdrop-blur z-50'>
      
      {/* title card */}
      <div className='flex justify-between items-center'>
        <section className='font-semibold text-2xl md:text-3xl hover:text-customOrange transition-all'>
          <p><a href="/" className='hover:text-customOrange transition-all'>PoultryGuard</a></p>
        </section>

        {/* hambuyrger icon */}
        <button
          className='lg:hidden focus:outline-none flex items-center justify-center'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle Menu'
        >
          <span className="material-symbols-outlined text-4xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* navbar main */}
        <div className='hidden lg:flex w-full items-center justify-between'>
          <ul className='flex flex-1 justify-center gap-6 font-semibold text-lg'>
            <li><a href="/" className='hover:text-customOrange transition-all'>Home</a></li>
            <li><a href="/tech" className='hover:text-customOrange transition-all'>Tech Stack</a></li>
            <li><a href="/about" className='hover:text-customOrange transition-all'>About Us</a></li>
          </ul>

          <section className='font-semibold text-xl hover:text-customOrange transition-all'>
            <a href='https://github.com/julsCadenas/PoultryGuard' target='_blank' rel='noopener noreferrer' className='flex flex-row items-center gap-2'>
            <i className="devicon-github-original text-3xl"></i>
            <p>Source</p></a>
          </section>
      </div>

      </div>

      {/* navbar mobile */}
      <div className={`lg:hidden overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-60 mt-4' : 'max-h-0'}`}>
        <ul className='flex flex-col gap-3 font-semibold text-lg'>
          <li><a href="/" className='hover:text-customOrange transition-all'>Introduction</a></li>
          <li><a href="/tech" className='hover:text-customOrange transition-all'>Tech Stack</a></li>
          <li><a href="/contact" className='hover:text-customOrange transition-all'>About Us</a></li>
        </ul>
        <section className='font-semibold text-lg mt-4 flex flex-row gap-2 items-center hover:text-customOrange transition-all'>
          <i className="devicon-github-original text-xl"></i>
          <p>Source</p>
        </section>
      </div>
    </nav>
  )
}

export default Navbar