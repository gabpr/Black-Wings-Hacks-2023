import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../components/Menu.js";
import icon from "../assets/icon.png";

function Banner() {
  return (
    <div className="Banner py-5">
      <div class="sh">.</div>
    </div>
  );
}

function TodaysPrompt() {
  return (
    <div
      className="Daily pt-3 pb-3
    "
    >
      <h1>
        <b>Daily Prompt</b>
      </h1>
      <h5 class="pt-2">
        '<i>What do you look for from an employer around work-life balance?'</i>
      </h5>
    </div>
  );
}

function QBox() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="Qbox pt-4 px-1 py-2">
      <h4 class="pb-1">Share your experience!</h4>
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

function PFeed() {
  const [dailyPrompts, setDailyPrompts] = useState([]);

  useEffect(() => {
    const data = require("../prompt-data.json");
    setDailyPrompts(data.dailyPrompts.slice(0, 3));
  }, []);

  return (
    <div className="Qfeed pb-5 pt-4">
      <div className="pb-1">
        <h4>Recent Questions from the Community</h4>
      </div>
      {dailyPrompts.map((prompt) => (
        <div className="break mx-auto py-2">
          <div className="qfeed Qbubble">
            <img src={icon} alt=""></img>
            <div key={prompt.id}>
              <p className="px-2 pt-2">
                <b>{prompt.writtenByName} Replies:</b>
              </p>
              <p className="px-5">{prompt.promptAnswer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Prompts() {
  return (
    <div class="bg">
      <Menu />
      <Banner />
      <TodaysPrompt />
      <QBox />
      <PFeed />
    </div>
  );
}
