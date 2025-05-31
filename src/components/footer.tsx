'use client'
import React, { useState } from 'react'

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='text-customWhite font-Poppins w-full px-13 py-13 bg-customWhite/6 backdrop-blur text-white'>
      <div className="max-w-7xl mx-auto">
    <p className="text-center">© 2025 PoultryGuard</p>
      </div>


      {/* navbar mobile */}
      <div className={`lg:hidden overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-60 mt-4' : 'max-h-0'}`}>
        <div className="max-w-7xl mx-auto">
          <p className="text-center">© 2025 PoultryGuard</p>
        </div>
      </div>
    </nav>
  )
}

export default Footer