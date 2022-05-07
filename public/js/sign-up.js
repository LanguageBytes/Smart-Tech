const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const enterUsername = document.querySelector('#username-signup');
    const enterPassword = document.querySelector('#password-signup');
  
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username: enterUsername.value,
        password: enterPassword.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create an account. Please try again.');
    }
  };
  
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);