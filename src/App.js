import React from "react";
import "./App.css";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Content from "./component/content/content";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;