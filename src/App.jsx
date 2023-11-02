//import { useRef, useState } from 'react';
import "./App.css";
//import Checklist from './components/Checklist';
import Menu from "./components/Menu";
//import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Graphics from "./components/Graphics";
import Art from "./components/Portraits";
import About from "./components/About";
import Films from "./components/Films";
import Portraits from "./components/Portraits";
import Carousel from "./components/carousel/Carousel";
import ThemeToggle from "./components/themeToggle";
import { useEffect, useState } from "react";
import DemoAnimation from "./components/DemoAnimation";
import XS from "./components/XS";
import { useSpring, animated } from "react-spring";

function App() {
  // const list = ["paul", "david", "bay city"];
  // const [list, setList] = useState(["blue"]);
  // const submitButton = useRef();

  const [theme, setTheme] = useState("dark");
  const [isActive, setIsActive] = useState("false");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    document.body.className = `${theme}-mode`;
  }, [theme]);

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.style.setProperty("--background-color", "black");
  //     document.documentElement.style.setProperty("--color", "white");
  //     document.documentElement.style.setProperty(
  //       "--menu-text-color",
  //       "rgb(246, 217, 217)"
  //     );
  //   } else {
  //     document.documentElement.style.setProperty("--background-color", "white");
  //     document.documentElement.style.setProperty("--color", "black");
  //     document.documentElement.style.setProperty("--menu-text-color", "black");
  //   }
  // }, [theme]);

  return (
    <Router>
      <div className={`App ${theme}-mode`}>
        <button onClick={() => setIsActive(!isActive)}>
          {" "}
          click this for XS DEMO
        </button>
        <XS active={isActive} />

        <h1>Paul Henderson</h1>
        <h2>designer</h2>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        {/* <DemoAnimation /> */}

        <Menu />
        {/* <img src="./images/graphicdesignlogosmall.jpg" alt="" /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Graphics />
                <Art />
                <Films />
              </>
            }
          ></Route>
          <Route path="/graphics" element={<Graphics />}></Route>
          <Route path="/portraits" element={<Portraits />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/films" element={<Films />}></Route>
        </Routes>
        {/* <Checklist setList={setList} list={list} />
      <input ref={submitButton}
        type="text" placeholder='email here' />
      <button onClick={() => {
        setList([...list, submitButton.current.value])
      }}>click me</button> */}
      </div>
    </Router>
  );
}

export default App;

// for the third Carousel on the graphics page and other pages i want it to go the other direction, the Animation
// i want to be able to spin the carosel with a flick of my finger or a pull with the mouse
// i want to be able to institute dark mode with a toggle
// i want music from a cool song playing but off by default
// all designs should be the same size I think. So remove the small graphic design examples and make or find cooler ones
