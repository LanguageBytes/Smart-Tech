const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const enterUsername= document.querySelector('#username-login');
    const enterPassword = document.querySelector('#password-login');
  
    const response = await fetch('/api/user/login', {
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
      alert('Log in failed. Please try again.');
    }
  };
  
  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);