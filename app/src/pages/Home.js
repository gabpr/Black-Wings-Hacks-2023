import { useState } from "react";
import { useEffect} from "react";
import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu.js'

function Banner() {
  return (
    <div className="Banner py-5">
      <div class="sh">.</div>
      Hi, Nicole!
    </div>    
  );
}

function DailyPrompt() {
  return (
    <div className="Daily pt-3 pb-3
    ">
      <h1>Daily Prompt</h1>
      <p class="pt-2">A daily prompt goes here</p>
      <button type="button" class="btn btn-primary"><div class="px-2 py-0">Submit</div></button>
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
          <option value="Applications">Applications</option>
          <option value="Courses">Courses</option>
          <option value="Majors">Majors</option>
          <option value="Mental Health">Mental Health</option>
          <option value="Relationships">Relationships</option>
          <option value="Financial Planning">Financial Planning</option>
          <option value="Time Management">Time Management</option>
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
        <Banner />
        <DailyPrompt />
        <QBox />
        <Qcategories />
        <QFeed />
    </div>
    )
  }