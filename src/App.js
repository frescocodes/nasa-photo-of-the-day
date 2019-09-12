import React from "react";
import "./App.css";
import PhotoInfo from "./components/PhotoCard/PhotoInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NASA Image of the Day</h1>
        <img className="App-logo" src="https://icon-library.net/images/react-icon/react-icon-14.jpg" alt="logo"></img>
      </header>
      <section className="daily-section">
        <PhotoInfo />

      </section>
      
      
    </div>

  );
}

export default App;
