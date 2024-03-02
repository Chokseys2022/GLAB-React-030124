// function Header() {
//   return (<h1>Simple React Application</h1>);
// }

// function Content(props) {
//   return (<p style={{color: props.color}}>{props.text}</p>);
// }

// function Footer() {
//   return (<h1>Created by Me, of course.</h1>);
// }

// function App() {
//   return (
//     <>
//       <Header />
//       <Content color="blue" text="This is my first React Application!" />
//       <Content color="red" text="Wish me luck..." />
//       <Content color="green" text="I think I've got it!" />
//       <Footer />
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Header />
      <Content color="blue" text="Some random stuff!" />
      <Content color="red" text="Some random stuff!" />
      <Content color="green" text="Some random stuff!" />
      <Footer />
    </>
  );
}

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default App;
