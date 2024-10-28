import React from 'react'
import './main.sass'

function Modal({ isOpen, onClose, children }) {

    if (!isOpen) return null;

  return (
    <div className='modal-overlay'>
        <div className='modal-content'>
            <button onClick={onClose} className='button'>X</button>
            {children}
        </div>
    </div>
  )
}

export default Modal