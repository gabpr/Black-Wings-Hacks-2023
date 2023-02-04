import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {

const navigate = useNavigate();

// States for registration
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the email change
const handleUsername = (e) => {
setUsername(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (username === '' || password === '') {
setError(true);
} else {
navigate("/Home");
setSubmitted(true);
setError(false);
}
};

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1>User {username}  successfully logged in!</h1>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please enter all the fields</h1>
</div>
);
};

return (
<div className="form">
<div>
<h1>Log in</h1>
</div>

{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<form>
{/* Labels and inputs for form data */}

<label className="label">username</label>
<input onChange={handleUsername} className="input"
value={username} type="email" />

<label className="label">password</label>
<input onChange={handlePassword} className="input"
value={password} type="password" />

<button onClick={handleSubmit} className="btn" type="submit">
Submit
</button>
</form>
</div>
);
}