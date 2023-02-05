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
      <div class="sh">.</div>Q & A
    </div>
  );
}

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form class="pt-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        style={{ marginRight: "10px" }}
      />
      <button type="submit" class="btn btn-primary px-3">
        Search
      </button>
    </form>
  );
};

function Filters() {
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div class="break mx-auto mt-0 pt-4">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "25%" }}>
          <label class="pb-2 px-3">Filter: Topics</label>
        </div>
        <div style={{ width: "25%" }}>
          <select
            class="cat p-1 w-100"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Select</option>
            <option value="Applications">Applications</option>
            <option value="Courses">Courses</option>
            <option value="Majors">Majors</option>
            <option value="Mental Health">Mental Health</option>
            <option value="Relationships">Relationships</option>
            <option value="Financial Planning">Financial Planning</option>
            <option value="Time Management">Time Management</option>
          </select>
        </div>
        <div style={{ width: "25%" }}>
          <label class="pb-2 px-3">Filter: User Flair</label>
        </div>
        <div style={{ width: "25%" }}>
          <select
            class="cat p-1 w-100"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Select</option>
            <option value="New Grad">Mew Grad</option>
            <option value="Non-Traditional">Non-Traditional</option>
            <option value="Advanced Career">Advanced Career</option>
            <option value="Student">Student</option>
          </select>
        </div>
      </div>
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
      setKeys(Object.keys(json.message).slice(0, 20));
    }
    fetchData();
  }, []);

  return (
    <div className="Qfeed pb-5 pt-4">
      <div class="pb-1">
        <h4>All Questions</h4>
      </div>
      <Filters />
      {keys.map((key, index) => (
        <div className="Qbubble" key={index}>
          <div class="break mx-auto py-2 ">
            <div class="qfeed">
              <img src={icon} alt=""></img>
              <p class="px-2 pt-2">
                <b>
                  {key}: {message[key]} Asks:
                </b>
              </p>
              <p class="px-5">
                {key}: {message[key]}
              </p>
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
      <SearchBox />
      <QFeed />
    </div>
  );
}
