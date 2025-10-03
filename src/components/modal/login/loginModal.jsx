import React, { useState } from 'react'
import LoginForm from '../../form/LoginForm'

function loginModal({ show, onClose }) {
  if (!show) return null;

  return (
    <>
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="w-[90%] sm:w-[80%] md:max-w-[595px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <LoginForm/>
        </div>
    </div>
    </>
  )
}

export default loginModal