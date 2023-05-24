
const login = async(email, password) => {
    const response = await fetch("https://quickpolls-2zqu.onrender.com/api/auth/login",{
        method: "POST",
        headers: {
            Accept: "applicaiton/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
        withCredentials: true,
        credentials: "include",
    });

    const data = await response.json();
    return data;
};

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit',async (e) => {
    console.log("login form submitted");
    const errormessage = document.getElementById('error-msg');
    errormessage.innerHTML = "";
    const loginbutton = document.getElementById('login-btn');
    loginbutton.innerHTML = "Logging in...";
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    if(email.length == 0 && password.length == 0){
        errormessage.innerHTML = "Email and Password are required<br>";
        return;
    }
    if(email.length == 0){
        errormessage.innerHTML += "Email is required<br>";
        return;
    }
    if(password.length == 0){
        errormessage.innerHTML += "Password is required<br>";
        return;
    }
    const data = await login(email, password);
    // const data = await login(email, password);
    loginbutton.innerHTML = "Sign In";
    if (data.message) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", JSON.stringify(data.token));
        const user = JSON.parse(localStorage.getItem("user"));
        const role = user.role;
        if (role == "admin") {
          window.location.href = "../Admin/Admin.html";
        } else {
          // window.location.href = "../Feed/feed.html";
          window.location.href="../profile.html"
        }
      }
    else {
        let err;
        if (data.message) {
          err = data.errormessage;
        } else {
          err = data.error;
        }
        errormessage.innerHTML = err;
      }
});

