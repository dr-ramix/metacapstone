import React from 'react'
import './bigButton.css'

const BigButton = ({children,backgroundColor}) => {
  return (
    <button style={{backgroundColor:backgroundColor}} className='bigButton'>{children}</button>
  )
}

export default BigButton;
