// import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Form from './pages/Form';
import Home from './pages/Home';
import Prompts from './pages/Prompts';
import Questions from './pages/Questions';

import CreateProfile from './pages/CreateProfile';

// function Menu() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && (
//         <ul>
//           <li>Item 1</li>
//           <li>Item 2</li>
//           <li>Item 3</li>
//         </ul>
//       )}
//     </div>
//   );
// }

// function QBox() {
//   const [inputValue, setInputValue] = useState("");

//   return (
//     <div>
//       <div class="text-primary mt-2">Ask a Question</div>
//       <input 
//         type="text" 
//         value={inputValue} 
//         onChange={(event) => setInputValue(event.target.value)} 
//       />
//       <p>Input value: {inputValue}</p>
//     </div>
//   );
// }

// function Qcategories() {
//   const [selectedOption, setSelectedOption] = useState("Option 1");

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div class="w-100">
//       <label class="w-100 text-primary">Category</label>
//       <select value={selectedOption} onChange={handleOptionChange}>
//         <option value="Option 1">Option 1</option>
//         <option value="Option 2">Option 2</option>
//         <option value="Option 3">Option 3</option>
//         <option value="Option 4">Option 4</option>
//         <option value="Option 5">Option 5</option>
//       </select>
//     </div>
//   );
// }

// function QFeed() {
//   const [keys, setKeys] = useState([]);  
//   const [message, setMessage] = useState({});

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("https://dog.ceo/api/breeds/list/all");
//       const json = await response.json();
//       setMessage(json.message);
//       setKeys(Object.keys(json.message).slice(0, 3));
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div class="mt-3 text-primary">Question Feed</div>
//       {keys.map((key, index) => (
//         <div key={index}>
//           <div class="qfeed">{key}: {message[key]}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// const App = () => (
  // <div>
  //   <Menu />
  //   <QBox />
  //   <Qcategories />
  //   <QFeed />
  // </div>

// {/* <div className="App">
//   <Form />
// </div>
// ); */}

const App = () => {
  return (
    <div className="App">
  
  {/* added routes here because the tutorial showed 
  that but we can keep routes.js*/}


      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/questions" component={Questions} />
        <Route path="/dailyprompt" component={Prompts} /> */}
        <Route path="/signup" element={<CreateProfile />} />
        
      </Routes>
   </div>
  );
};

export default App;
