import React from 'react';

const Menu = () => {
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
    category: {
      margin: '40px 0',
    },
    categoryHeader: {
      fontSize: '2rem',
      color: '#e76f51',
      marginBottom: '20px',
      borderBottom: '2px solid #2a9d8f',
      display: 'inline-block',
      paddingBottom: '5px',
    },
    item: {
      fontSize: '1.2rem',
      marginBottom: '10px',
    },
    itemName: {
      fontWeight: 'bold',
      fontSize: '1.4rem',
      color: '#264653',
    },
    itemPrice: {
      color: '#2a9d8f',
      fontWeight: 'bold',
    },
    itemDescription: {
      fontSize: '1rem',
      color: '#6c757d',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our Menu</h1>

      {/* Appetizers */}
      <div style={styles.category}>
        <h2 style={styles.categoryHeader}>Appetizers</h2>
        <div style={styles.item}>
          <span style={styles.itemName}>Lemon Garlic Shrimp</span> - <span style={styles.itemPrice}>€12.99</span>
          <p style={styles.itemDescription}>
            Succulent shrimp sautéed in a zesty lemon garlic butter sauce, served with crusty bread.
          </p>
        </div>
        <div style={styles.item}>
          <span style={styles.itemName}>Mediterranean Hummus Platter</span> - <span style={styles.itemPrice}>€8.99</span>
          <p style={styles.itemDescription}>
            A trio of house-made hummus, served with fresh pita, olives, and crunchy vegetables.
          </p>
        </div>
      </div>

      {/* Main Courses */}
      <div style={styles.category}>
        <h2 style={styles.categoryHeader}>Main Courses</h2>
        <div style={styles.item}>
          <span style={styles.itemName}>Lemon Herb Chicken</span> - <span style={styles.itemPrice}>€18.99</span>
          <p style={styles.itemDescription}>
            Grilled chicken breast marinated with fresh herbs and lemon, served with roasted vegetables and mashed potatoes.
          </p>
        </div>
        <div style={styles.item}>
          <span style={styles.itemName}>Bavarian Sausage Platter</span> - <span style={styles.itemPrice}>€16.50</span>
          <p style={styles.itemDescription}>
            A selection of traditional Bavarian sausages, served with mustard, sauerkraut, and pretzels.
          </p>
        </div>
        <div style={styles.item}>
          <span style={styles.itemName}>Mediterranean Pasta</span> - <span style={styles.itemPrice}>€14.99</span>
          <p style={styles.itemDescription}>
            Penne pasta tossed in a light olive oil, lemon, and garlic sauce, topped with fresh vegetables and Parmesan.
          </p>
        </div>
      </div>

      {/* Desserts */}
      <div style={styles.category}>
        <h2 style={styles.categoryHeader}>Desserts</h2>
        <div style={styles.item}>
          <span style={styles.itemName}>Lemon Cheesecake</span> - <span style={styles.itemPrice}>€7.99</span>
          <p style={styles.itemDescription}>
            Creamy cheesecake infused with lemon zest, served with a buttery graham cracker crust.
          </p>
        </div>
        <div style={styles.item}>
          <span style={styles.itemName}>Apple Strudel</span> - <span style={styles.itemPrice}>€6.50</span>
          <p style={styles.itemDescription}>
            Traditional Bavarian apple strudel, served warm with vanilla ice cream.
          </p>
        </div>
      </div>

      {/* Beverages */}
      <div style={styles.category}>
        <h2 style={styles.categoryHeader}>Beverages</h2>
        <div style={styles.item}>
          <span style={styles.itemName}>Fresh Lemonade</span> - <span style={styles.itemPrice}>€3.99</span>
          <p style={styles.itemDescription}>
            Refreshing lemonade made with freshly squeezed lemons.
          </p>
        </div>
        <div style={styles.item}>
          <span style={styles.itemName}>Bavarian Lager</span> - <span style={styles.itemPrice}>€4.50</span>
          <p style={styles.itemDescription}>
            A crisp and refreshing local lager, brewed in Munich.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;