import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Header />
      <Content
        color="blueviolet
      "
        text="You are never too old to set another goal or dream a new dream.

 - Les Brown"
      />
      <Content
        color="purple"
        text="If you want light to come into your life, you need to stand where it is shining.

 - Guy Finley

Writer"
      />
      <Content
        color="blueviolet"
        text="You’re braver than you believe, and stronger than you seem, and smarter than you think.

 - A.A. Mine"
      />
      <Footer />
    </>
  );
}

export default App;
