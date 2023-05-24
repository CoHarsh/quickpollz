

const register = async (firstname, email, username, password) => {
    // api call to locahost:3000/api/auth/register
    console.log(firstname, email, username, password);
    const response = await fetch(
      "https://quickpolls-2zqu.onrender.com/api/auth/register",
      {
        method: "POST",
        headers: {
          Accept: "applicaiton/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: firstname,
          email,
          username,
          password,
        }),
        withCredentials: true,
        credentials: "include",
      }
    );
  
    return response;
};


const registerform = document.getElementById('signup-form');

registerform.addEventListener('submit', async(e) => {
    e.preventDefault();
    const firstname = registerform['register-firstname'].value;
    const lastname = registerform['register-lastname'].value;
    const email = registerform['register-email'].value;
    const username = registerform['register-username'].value;
    const password = registerform['register-password'].value;
    const confirmpassword = registerform['register-retype-password'].value;
    const errormsg = document.getElementById('error-msg');
    errormsg.innerHTML = '';
    const regbtn = document.getElementById('signup-btn');
    regbtn.innerHTML = 'Please wait...';

    if(!firstname){
        errormsg.innerHTML = 'Please enter your first name';
        return;
    }else if(!lastname){
        errormsg.innerHTML = 'Please enter your last name';
        return;
    }else if(!email){
        errormsg.innerHTML = 'Please enter your email';
        return;
    }else if(!username){
        errormsg.innerHTML = 'Please enter your username';
        return;
    }else if(!password){
        errormsg.innerHTML = 'Please enter your password';
        return;
    }else if(!confirmpassword){
        errormsg.innerHTML = 'Please confirm your password';
        return;
    }else if(password != confirmpassword){
        errormsg.innerHTML = 'Password does not match';
        return;
    }

    const response =await register(firstname + " " +lastname, email,username, password);
    const data = await response.json();
    regbtn.innerHTML = 'Sign up';
    console.log(data);
    const statuscode = response.status;
    if (statuscode == 200) {
      console.log("Signup successful");
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.token));
      window.location.href = "../profile.html";
    } else {
      errormsg.innerHTML = data.message;
      return;
    }
    return;
});