import { useState } from "react";
import { useEffect} from "react";
import React from "react";

function Menu() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="Welcome">
        <h2>Hi, Nicole!</h2>
        {/* <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"}
        </button>
        {isOpen && (
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        )} */}

      </div>
    );
  }
  
  function QBox() {
    const [inputValue, setInputValue] = useState("");
  
    return (
      <div className="Qbox">
        <div >Ask a Question</div>
        <textarea 
          value={inputValue} 
          onChange={(event) => setInputValue(event.target.value)} 
        />
        <p>Input value: {inputValue}</p>
      </div>
    );
  }
  
  function Qcategories() {
    const [selectedOption, setSelectedOption] = useState("Option 1");
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div class="w-100" className="Qbox">
        <label class="w-100 text-primary">Category</label>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
          <option value="Option 5">Option 5</option>
        </select>
      </div>
    );
  }
  
  function QFeed() {
    const [keys, setKeys] = useState([]);  
    const [message, setMessage] = useState({});
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const json = await response.json();
        setMessage(json.message);
        setKeys(Object.keys(json.message).slice(0, 3));
      }
      fetchData();
    }, []);
  
    return (
      <div className="Qfeed">
        <div >Question Feed</div>
        {keys.map((key, index) => (
          <div className="Qbubble" key={index}>
            <div class="qfeed">{key}: {message[key]}</div>
          </div>
        ))}
      </div>
    );
  }
export default function Home(){
    return(
    <div>
        <Menu />
        <QBox />
        <Qcategories />
        <QFeed />
    </div>
    )
  }