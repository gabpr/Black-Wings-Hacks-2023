import { useState } from "react";
import { useEffect} from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Menu() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="Welcome pt-5 pb-5">
        <h2 >Hi, Nicole!</h2>
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

  function DailyPrompt() {
  
    return (
      <div className="Welcome pt-5 pb-5">
        <h2 >Daily Prompt</h2>
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
      <div className="Qbox pt-2 pb-0 mb-0">
        <h4>Ask a Question</h4>
        <textarea 
          value={inputValue} 
          onChange={(event) => setInputValue(event.target.value)} 
        />
        {/* <p>Input value: {inputValue}</p> */}
      </div>
    );
  }
  
  function Qcategories() {
    const [selectedOption, setSelectedOption] = useState("Option 1");
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div class="w-100" className="Qbox mt-0 pb-4">
        <label class="w-100 pb-2">Category</label>
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
      <div className="Qfeed pb-5 pt-2">
        <div >Recent Questions</div>
        {keys.map((key, index) => (
          <div className="Qbubble" key={index}>
            <div class="qfeed m-2">{key}: {message[key]}</div>
          </div>
        ))}
      </div>
    );
  }
  
export default function Home(){
    return(
    <div class="bg">
        <Menu />
        <DailyPrompt />
        <QBox />
        <Qcategories />
        <QFeed />
    </div>
    )
  }