import React from "react";
import { useReducer, useState } from "react";
// import "../App";

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }

export default function CreateProfile(){
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 5000)
        alert("You have submitted the form.")
      }
    
    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }

    return (
        <div className = "wrapper">
            <h1>Profile</h1>
            {submitting &&
             <div>You are submitting the following:
             <ul>
               {Object.entries(formData).map(([name, value]) => (
                 <li key={name}><strong>{}</strong> {value.toString()}</li>
               ))}
             </ul></div>}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name="name" onChange={handleChange}/>
                    </label>
                    <label>
                        <p>About me</p>
                        <input aboutMe="aboutMe" onChange={handleChange}/>
                    </label>
                    What best describes you?
                        <div className="classification">
                        <input type="checkbox" id="student" name="student" value="Student"/> Student 
                        <input type="checkbox" id="newGrad" name="newGrad" value="New Grad" /> New Grad 
                        <input type="checkbox" id="oldGrad" name="oldGrad" value="Old Grad" /> Old Grad 

                        </div>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}