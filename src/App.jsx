import React from "react";
import Intro from "./components/intro";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import Fundme from "./components/fundme";
function App() {
  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Fundme />
      <Footer />
    </div>
  );
}

export default App;
