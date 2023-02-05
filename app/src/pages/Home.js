import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../components/Menu.js";
import icon from "../assets/icon.png";
import { useNavigate } from "react-router-dom";

function Banner() {
  return (
    <div className="Banner py-5">
      <div class="sh">.</div>
      Hello, Gaby!
    </div>
  );
}

function DailyPrompt() {
  const navigate = useNavigate();

  // handle user requesting to view all prompts
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dailyprompt");
  };

  return (
    <div
      className="Daily pt-3 pb-3
    "
    >
      <h1>Daily Prompt</h1>
      <p class="pt-2">What do you look for from an employer... </p>

      <form onSubmit={handleSubmit}>
        <button type="submit" className="btn px-3">
          Respond & View
        </button>
      </form>
    </div>
  );
}

function QBox() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="Qbox pt-4 px-1 py-2">
      <h4 class="pb-1">Ask a Question</h4>
      <Qcategories />
      <textarea
        class="break mx-auto"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      {/* <p>Input value: {inputValue}</p> */}
      <button type="button" class="btn btn-primary">
        <div class="px-2 py-0">Submit</div>
      </button>
    </div>
  );
}

function Qcategories() {
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div class="w-100" className="tr mt-0 pb-2 pt-2">
      <label class="pb-2 px-3 tr">
        <b>Category</b>
      </label>
      <select
        class="cat p-1"
        value={selectedOption}
        onChange={handleOptionChange}
      >
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

// return (
//   <div className="Qfeed pb-5 pt-4">
//     <div class="pb-1">
//       <h4>Recent Questions from the Community</h4>
//     </div>
//     {keys.map((key, index) => (
//       <div className="Qbubble" key={index}>
//         <div class="break mx-auto py-2 ">
//           <div class="qfeed">
//             <img src={icon} alt=""></img>
//             <p class="px-2 pt-2">
//               <b>
//                 {key}: {message[key]} Asks:
//               </b>
//             </p>
//             <p class="px-5">
//               {key}: {message[key]}
//             </p>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// );
// }

function QFeed() {
  const [qAndAnswers, setQAndAnswers] = useState([]);

  useEffect(() => {
    const data = require("../questionanswer-data.json");
    setQAndAnswers(data.qAndAnswers.slice(0, 3));
  }, []);

  return (
    <div className="Qfeed pb-5 pt-4">
      <div class="pb-1">
        <h4>Recent Questions from the Community</h4>
      </div>
      {qAndAnswers.map((qAndAnswer) => (
        <div class="break mx-auto py-2 ">
          <div class="qfeed Qbubble">
            <img src={icon} alt=""></img>
            <div key={qAndAnswer.question}>
              <p class="px-2 pt-2">
                <b>{qAndAnswer.postedBy} Asks:</b>
              </p>
              <p class="px-5">{qAndAnswer.question}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div class="bg">
      <Menu />
      <Banner />
      <DailyPrompt />
      <QBox />
      <QFeed />
    </div>
  );
}
