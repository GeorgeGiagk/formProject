const validate = (values) => {
	const errors = {};
	const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!values.username) {
		errors.username = 'Username is required';
	}
	if (!values.email) {
		errors.email = 'Email is required';
	} else if (!regex.test(values.email)) {
		errors.email = 'This is not a valid email';
	}
	if (!values.password) {
		errors.password = 'Password is required';
	} else if (values.password.length < 4) {
		errors.password = 'Password must be more than 4 characters';
	}

	return errors;
};

export default validate;
