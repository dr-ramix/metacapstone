import React from 'react'
import './testimonial.css'
import userProfile from '../../assets/images/depositphotos_179308458-stock-illustration-unknown-person-silhouette-profile-picture.jpg'

const Testimonial = () => {
  return (
    <section className="testimonial">
        <span>4/5</span>
        <div className="userDetails">
          <img 
           src={userProfile}
           alt="User Profile"
          />
          <span>MY NAME</span>
        </div>
        <span>This is a random review</span>
    </section>
  )
}

export default Testimonial
