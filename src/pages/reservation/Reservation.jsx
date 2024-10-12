import React, { useState } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    specialRequest: '',
  });

  const styles = {
    container: {
      padding: '50px',
      backgroundColor: '#f4f4f9',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#264653',
      textAlign: 'center',
    },
    header: {
      fontSize: '3rem',
      color: '#2a9d8f',
      marginBottom: '20px',
    },
    form: {
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    inputGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      textAlign: 'left',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '1rem',
    },
    button: {
      padding: '15px 30px',
      backgroundColor: '#2a9d8f',
      color: '#fff',
      fontSize: '1.2rem',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#21867a',
    },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the reservation data here (send to backend, etc.)
    alert('Reservation submitted! We will confirm via email.');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Reserve a Table</h1>

      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="name">Full Name</label>
          <input
            style={styles.input}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="email">Email</label>
          <input
            style={styles.input}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="date">Reservation Date</label>
          <input
            style={styles.input}
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="time">Reservation Time</label>
          <input
            style={styles.input}
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="guests">Number of Guests</label>
          <input
            style={styles.input}
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="specialRequest">Special Requests (Optional)</label>
          <textarea
            style={styles.input}
            id="specialRequest"
            name="specialRequest"
            value={formData.specialRequest}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Reservation;
