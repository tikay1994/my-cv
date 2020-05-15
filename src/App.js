import React from "react";
import { Button } from "reactstrap";
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
