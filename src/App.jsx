
//import { useRef, useState } from 'react';
import './App.css';
//import Checklist from './components/Checklist';
import Menu from './components/Menu';
//import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Graphics from './components/Graphics';
import Art from './components/Art';
import About from "./components/About";
import Films from "./components/Films";



function App() {
  // const list = ["paul", "david", "bay city"];
 // const [list, setList] = useState(["blue"]);
 // const submitButton = useRef();

  return (
<Router>
    <div className="App">
      <h1>Paul Henderson</h1>
      <h2>designer</h2>
      <Menu/>
      {/* <img src="./images/graphicdesignlogosmall.jpg" alt="" /> */}
      <Routes>
      <Route  path='/' element={<><Graphics /><Art/><Films/></>}></Route>
      <Route  path='/graphics' element={<Graphics />}></Route>  
      <Route path= '/art' element = {<Art/>}></Route>
      <Route path= '/about' element = {<About/>}></Route>
      <Route path= '/films' element = {<Films/>}></Route>
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
