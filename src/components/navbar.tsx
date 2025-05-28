import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed text-customWhite font-Poppins flex w-5/6 justify-between items-center px-6 py-3 m-3 rounded-3xl bg-customBlack/70 backdrop-blur'>
        <section className='font-semibold text-3xl'>
            <p>PoultryGuard</p>
        </section>
        <section className='flex items-center justify-center font-semibold text-lg'>
            <ul className='flex flex-row gap-3'>
                <li><a href="/">Introduction</a></li>
                <li><a href="/about">Tech Stack</a></li>
                <li><a href="/contact">About Us</a></li>
            </ul>
        </section>
        <section className='font-semibold text-xl flex flex-row gap-2 items-center justify-center'>
          <i className="devicon-github-original text-3xl"></i>
          <p>Source</p>
        </section>
    </nav>
  )
}

export default Navbar