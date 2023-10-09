
//import { useRef, useState } from 'react';
import './App.css';
//import Checklist from './components/Checklist';
import Menu from './components/Menu';

function App() {
  // const list = ["paul", "david", "bay city"];
 // const [list, setList] = useState(["blue"]);
 // const submitButton = useRef();

  return (

    <div className="App">
      <h1>Paul Henderson</h1>
      <h2>Designer</h2>
      <Menu/>
      {/* <Checklist setList={setList} list={list} />
      <input ref={submitButton}
        type="text" placeholder='email here' />
      <button onClick={() => {
        setList([...list, submitButton.current.value])
      }}>click me</button> */}
    </div>
  );

}


export default App; 
