
//import { useRef, useState } from 'react';
import './App.css';
//import Checklist from './components/Checklist';
import Menu from './components/Menu';
//import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Graphics from './components/Graphics';
import Art from './components/Art';
import About from "./components/About"


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
      
      <Routes>
      <Route  path='/Graphics' element={<Graphics />}></Route>  
      <Route  path='/' element={<></>}></Route>
      <Route path= '/Art' element = {<Art/>}></Route>
      <Route path= '/About' element = {<About/>}></Route>
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
