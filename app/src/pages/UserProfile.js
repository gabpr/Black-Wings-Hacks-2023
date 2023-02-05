import React from "react";
import { useReducer, useState } from "react";
import Menu from "../components/Menu.js";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function Banner() {
  return (
    <div className="Banner py-5">
      <div class="sh">.</div>
      Profile
    </div>
  );
}

export default function UserProfile() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 5000);
    //alert('You have submitted the form.')
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div className="wrapper">
      <Menu />
      <Banner />
      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{}</strong> {value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form class="break mx-auto" onSubmit={handleSubmit}>
        <fieldset>
          <label class="w-100 pt-4">
            <h5>
              <b>Name</b>
            </h5>
            <input
              class="w-100 mx-auto pb-3"
              name="name"
              onChange={handleChange}
            />
          </label>
          <label class="w-100 pt-4">
            <h5>
              <b>About me</b>
            </h5>
            <input
              class="w-100 mx-auto pb-3"
              aboutMe="aboutMe"
              onChange={handleChange}
            />
          </label>
          <div class="classification pt-4 pb-3 w-100">
            <h5>
              <b>What best describes you?</b>
            </h5>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div class="checks">
              <input
                type="checkbox"
                id="student"
                name="student"
                value="Student"
              />{" "}
              Student
            </div>
            <div class="checks">
              <input
                type="checkbox"
                id="newGrad"
                name="newGrad"
                value="New Grad"
              />{" "}
              New Grad
            </div>
            <div class="checks">
              <input
                type="checkbox"
                id="oldGrad"
                name="oldGrad"
                value="Old Grad"
              />{" "}
              Old Grad
            </div>
            {/* <div class="checks">
              <input
                type="checkbox"
                id="oldGrad"
                name="oldGrad"
                value="Old Grad"
              />{" "}
              Old Grad
            </div> */}
          </div>
        </fieldset>
        <button type="submit" class="btn primary-btn w-50">
          Submit
        </button>
      </form>
    </div>
  );
}
