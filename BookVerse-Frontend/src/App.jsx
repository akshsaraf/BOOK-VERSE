import React from "react";

const EpicTales = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      color: "#333",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "#f9f9f9",
    },
    topNav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#fff",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 10,
    },
    appName: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    iconContainer: {
      display: "flex",
      gap: "15px",
    },
    searchBarContainer: {
      marginTop: "70px", // Adjusted for fixed nav bar height
      padding: "20px",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    },
    searchBar: {
      width: "70%",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "20px",
      fontSize: "16px",
    },
    featured: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "30px",
      backgroundColor: "#fff",
      margin: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    featuredImage: {
      width: "50%",
      borderRadius: "10px",
      marginRight: "20px",
    },
    featuredContent: {
      textAlign: "left",
    },
    sectionTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      padding: "20px 0",
      paddingLeft: "20px",
    },
    sections: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      padding: "20px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    cardImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    cardContent: {
      padding: "10px",
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    cardAuthor: {
      fontSize: "14px",
      color: "#555",
    },
    nowPlaying: {
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      padding: "10px",
      backgroundColor: "#fff",
      borderTop: "1px solid #ddd",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
    },
    nowPlayingDetails: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    nowPlayingImage: {
      width: "50px",
      height: "50px",
      borderRadius: "5px",
    },
    nowPlayingInfo: {
      display: "flex",
      flexDirection: "column",
    },
    navBar: {
      display: "flex",
      justifyContent: "space-around",
      padding: "10px 0",
      backgroundColor: "#fff",
      borderTop: "1px solid #ddd",
    },
    navItem: {
      fontSize: "16px",
      color: "#555",
      textDecoration: "none",
    },
    desktopNav: {
      display: "none",
    },
    // Responsive Design
    "@media (min-width: 768px)": {
      navBar: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        backgroundColor: "#fff",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      },
      desktopNav: {
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 20px",
      },
      nowPlaying: {
        bottom: "-100px", // Hide the now playing section on larger screens
      },
    },
  };

  return (
    <div style={styles.container}>
      {/* Top Navigation */}
      <div style={styles.topNav}>
        <button>☰</button>
        <h1 style={styles.appName}>EpicTales</h1>
        <div style={styles.iconContainer}>
          <button>🔔</button>
          <button>🔍</button>
        </div>
      </div>

      {/* Search Bar */}
      <div style={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search for books, authors..."
          style={styles.searchBar}
        />
      </div>

      {/* Featured Section */}
      <div style={styles.featured}>
        <img
          src="https://via.placeholder.com/400x200"
          alt="Featured Book"
          style={styles.featuredImage}
        />
        <div style={styles.featuredContent}>
          <h2>The Great Adventure</h2>
          <p>by A.K. Lark</p>
          <button>▶ Play</button>
        </div>
      </div>

      {/* Top Charts Section */}
      <h2 style={styles.sectionTitle}>Top Charts</h2>
      <div style={styles.sections}>
        <div style={styles.card}>
          <img
            src="https://via.placeholder.com/300x200"
            alt="Book"
            style={styles.cardImage}
          />
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Epic Journey</h3>
            <p style={styles.cardAuthor}>by D.E. Knight</p>
          </div>
        </div>
        <div style={styles.card}>
          <img
            src="https://via.placeholder.com/300x200"
            alt="Book"
            style={styles.cardImage}
          />
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Mystic River</h3>
            <p style={styles.cardAuthor}>by F.G. White</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation (hidden in desktop view) */}
      <div style={styles.navBar}>
        <a href="#home" style={styles.navItem}>
          Home
        </a>
        <a href="#library" style={styles.navItem}>
          Library
        </a>
        <a href="#write" style={styles.navItem}>
          Write
        </a>
        <a href="#publish" style={styles.navItem}>
          Publish
        </a>
        <a href="#admin" style={styles.navItem}>
          Admin
        </a>
      </div>
    </div>
  );
};

export default EpicTales;
