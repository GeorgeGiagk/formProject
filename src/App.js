import './App.css';
import { useState } from 'react';
import validate from './validation';

function App() {
	const initialValues = {
		username: '',
		email: '',
		password: '',
	};

	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const cleanInputs = () => {
		setFormValues(initialValues);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		cleanInputs();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};

	return (
		<div className="container">
			{Object.keys(formErrors).length === 0 && isSubmit ? (
				<div className="ui message success">Signed is successfully</div>
			) : (
				<pre>{JSON.stringify(formValues, undefined, 2)} </pre>
			)}

			<form onSubmit={handleSubmit}>
				<h1>Login Form</h1>
				<div className="ui divider"></div>
				<div className="ui form">
					<div className="field">
						<label>Username</label>
						<input
							type="text"
							name="username"
							placeholder="Username"
							value={formValues.username}
							onChange={handleChange}
						/>
					</div>
					<p> {formErrors.username} </p>
					<div className="field">
						<label>Email</label>
						<input
							type="text"
							name="email"
							placeholder="email"
							value={formValues.email}
							onChange={handleChange}
						/>
					</div>
					<p> {formErrors.email} </p>

					<div className="field">
						<label>Password</label>
						<input
							type="text"
							name="password"
							placeholder="Password"
							value={formValues.password}
							onChange={handleChange}
						/>
					</div>
					<p> {formErrors.password} </p>

					<button className="fluid ui button blue">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default App;
