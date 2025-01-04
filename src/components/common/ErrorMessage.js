import React from 'react'
import '../styles/error-message.css';

export default function ErrorMessage({message}) {
  return (
    <div className='error-message'>
      {message}
    </div>
  )
}
