const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const cpasswordError = document.getElementById('cpassword-error');

form.addEventListener('submit', function (e) {
	let isValid = true;

	if (name.value.trim() === '') {
		nameError.textContent = 'Name is required';
		isValid = false;
	} else {
		nameError.textContent = '';
	}
	if (email.value.trim() === '') {
		emailError.textContent = 'Email is required';
		isValid = false;
	} else {
		emailError.textContent = '';
	}
	if (password.value.trim() === '') {
		passwordError.textContent = 'Password is required';
		isValid = false;
	} else if (password.value.length < 8) {
		passwordError.textContent = 'password length should be min 8 char';
		isValid = false;
	} else {
		passwordError.textContent = '';
	}
	if (cpassword.value.trim() === '') {
		cpasswordError.textContent = 'cpassword is required';
		isValid = false;
	} else if (password.value !== cpassword.value) {
		cpasswordError.textContent = 'password does not match';
		isValid = false;
	} else {
		cpasswordError.textContent = '';
	}

	if (isValid === false) {
		e.preventDefault();
	}
});
