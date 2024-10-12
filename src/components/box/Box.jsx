import React from 'react'
import './box.css'
import BigButton from '../bigButton/BigButton';
import foodPic from '../../assets/images/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg'

const Box = () => {
  return (
    <article className='box'>
        <div className='boxContainer'>
            <div className='boxLeft'>
                <div className='boxLeftContainer'>
                    <h1>Little Lemon</h1>
                    <h3>Munich</h3>
                    <p>
                        Wea are a family owned a good restaurant focused on traditional recipes served with modern twist.
                    </p>
                    <BigButton backgroundColor="#F4CE14">{"Reseve a Table"}</BigButton>
                </div>
            </div>
            <div className='boxRight'>
                <img src={foodPic} alt='photo' />
            </div>
        </div>
    </article>
  )
}

export default Box;
