'use client'
import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
}

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, title, message } = props

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-transparent z-50 flex items-center justify-center font-Poppins">
      <div className="bg-customWhite text-customBlack p-6 rounded-lg max-w-sm shadow-xl text-center">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-customBlack text-customWhite px-4 py-2 rounded font-semibold hover:bg-customOrange hover:text-customBlack transition"
        >
          Close
        </button>
      </div>
    </div>
  )
}
