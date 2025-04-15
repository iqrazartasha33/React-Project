import React from 'react';
import './App.css'; 

function App() {
  const handleClick = () => {
    alert("Welcome Dear!");
  };

  return (
    <div className="App" style={{
      background: "linear-gradient(to right, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb, #a18cd1)",
      padding: "80px 20px",
      textAlign: "center",
      borderRadius: "20px",
      margin: "40px 0"
    }}>
      <h1 className="animate-text" style={{
        color: "#800080", 
        fontSize: "40px",
        textShadow: "9px 6px 4px pink",
        marginBottom: "20px"
      }}>Iqra!</h1>

      <p className="animate-text" style={{
        fontSize: "18px",
        color: "#4b0082",
        maxWidth: "600px",
        margin: "0 auto 30px"
      }}>
          Hi, I'm Iqra Zartasha, a passionate front-end developer specializing in creating stylish, responsive, and user-centric websites. I work with modern technologies like HTML, CSS, JavaScript, Tailwind CSS, and Firebase to deliver high-performance, scalable web applications with real-time functionality and secure authentication.
  </p>

      <button
        style={{
          backgroundColor: "#ff69b4", 
          color: "white",
          fontSize: "16px",
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          animation: "scaleUp 0.5s ease-in-out"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "purple"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#ff69b4"}
        onClick={handleClick}
      >
        Explore More
      </button>
    </div>
  );
}

export default App;
