/**
 * 
 */

 const loginButton = document.getElementById('login-button');
const message = document.getElementById('message');

loginButton.addEventListener('click', () => {
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	fetch('https://myapi.com/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ email: email, password: password })
	})
	.then(response => response.json())
	.then(data => {
		if (data.success) {
			message.innerText = 'Login successful';
			message.className = 'success';
			// Redirect to the dashboard page or perform other actions here
		} else {
			message.innerText = 'Invalid email or password';
			message.className = 'error';
		}
	})
	.catch(error => {
		message.innerText = 'An error occurred while logging in';
		message.className = 'error';
		console.error(error);
	});
});
