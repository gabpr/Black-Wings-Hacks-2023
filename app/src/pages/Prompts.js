import { useState } from "react";
import { useEffect} from "react";
import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu.js'
import icon from '../assets/icon.png'


function Banner() {
  return (
    <div className="Banner py-5">
      <div class="sh">.</div>
    </div>    
  );
}

function TodaysPrompt() {
  return (
    <div className="Daily pt-3 pb-3
    ">
      <h1><b>Daily Prompt</b></h1>
      <h5 class="pt-2">'<i>What do you look for from an employer around work-life balance?'</i></h5>
    </div>
    
  );
}

function QBox() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="Qbox pt-4 px-1 py-2">
      <h4 class="pb-1">Share your experience!</h4>
      <textarea class="break mx-auto"
        value={inputValue} 
        onChange={(event) => setInputValue(event.target.value)} 
      />
      {/* <p>Input value: {inputValue}</p> */}
      <button type="button" class="btn btn-primary"><div class="px-2 py-0">Submit</div></button>
    </div>
  );
}

function PFeed() {
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
    <div className="Qfeed pb-5 pt-4">
      <div class="pb-1"><h4>Recent Responses</h4></div>
      {keys.map((key, index) => (
        <div className="Qbubble" key={index}>
          <div class="break mx-auto py-2 ">
            <div class="qfeed">
              <img src={ icon } alt=''></img>
              <p class="px-2 pt-2"><b>{key}: {message[key]} Asks:</b></p><p class="px-5">
              {key}: {message[key]}</p></div>
          </div>
        </div>
      ))}
    </div>
  );
}
  
export default function Prompts(){
    return(
    <div class="bg">
        <Menu />
        <Banner />
        <TodaysPrompt />
        <QBox />
        <PFeed />
    </div>
    )
  }