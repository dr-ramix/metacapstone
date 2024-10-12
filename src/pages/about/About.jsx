import React from 'react';

const About = () => {
  const styles = {
    container: {
      textAlign: 'center',
      padding: '50px',
      backgroundColor: '#f4f4f9',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    header: {
      fontSize: '3rem',
      color: '#2a9d8f',
      marginBottom: '20px',
    },
    description: {
      fontSize: '1.2rem',
      color: '#264653',
      lineHeight: '1.6',
      maxWidth: '800px',
      margin: '0 auto',
    },
    highlight: {
      color: '#e76f51',
      fontWeight: 'bold',
    },
    image: {
      width: '100%',
      maxWidth: '500px',
      borderRadius: '10px',
      margin: '30px 0',
    },
    hours: {
      fontSize: '1.1rem',
      color: '#2a9d8f',
      marginTop: '30px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to Little Lemon Restaurant!</h1>

      <p style={styles.description}>
        Located in the heart of <span style={styles.highlight}>Munich</span>, Little Lemon is a cozy, family-run restaurant
        offering the finest Mediterranean and German fusion cuisine. Whether you're in the mood for fresh, zesty lemon-infused
        dishes or traditional Bavarian meals with a modern twist, our menu has something for everyone!
      </p>

      <img
        src="https://example.com/restaurant-photo.jpg"
        alt="Little Lemon Restaurant"
        style={styles.image}
      />

      <p style={styles.description}>
        Our chefs use only the freshest, locally-sourced ingredients to craft dishes bursting with flavor. From our
        signature lemon chicken to hearty German sausages, each meal is prepared with love and passion. Stop by and experience
        our warm atmosphere, delicious food, and excellent service.
      </p>

      <p style={styles.hours}>
        <strong>Opening Hours:</strong><br />
        Monday - Friday: 11:00 AM - 10:00 PM<br />
        Saturday: 12:00 PM - 11:00 PM<br />
        Sunday: Closed
      </p>
    </div>
  );
};

export default About;