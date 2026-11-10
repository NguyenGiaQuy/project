let users = JSON.parse(localStorage.getItem("userList")) || [];

let mainform = document.getElementById("sign-up-form");

mainform.addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let errorEmail = document.getElementById("errorEmail");
  let errorUsername = document.getElementById("errorUsername");
  let errorPassword = document.getElementById("errorPassword");

  errorEmail.innerText = "";
  errorUsername.innerText = "";
  errorPassword.innerText = "";

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const regexUser = /^[a-zA-Z][a-zA-Z0-9_]{0,15}$/;

  let isValid = true;
  console.log(regexEmail.test(email));
  if (!regexEmail.test(email)) {
    errorEmail.innerText = "Email không hợp lệ";
    errorEmail.style.color = "red";
    isValid = false;
  }

  console.log(regexPass.test(password));
  if (!regexPass.test(password)) {
    errorPassword.innerText = "Mật khẩu không hợp lệ";
    errorPassword.style.color = "red";
    isValid = false;
  }

  console.log(regexUser.test(username));
  if (!regexUser.test(username)) {
    errorUsername.innerText = "Tên không hợp lệ";
    errorUsername.style.color = "red";
    isValid = false;
  }

  if (isValid) {
    let newUser = {
      usercode: `U${Date.now()}`,
      username: username,
      email: email,
      password: password,
      role: "user",
      birthday: "2000-01-01",
      status: "Active",
      description: "",
    };

    users.push(newUser);
    localStorage.setItem("userList", JSON.stringify(users));
    alert("Đăng ký thành công");
    window.location.href =
      "http://127.0.0.1:5500/Project_Template/pages/dashboard.html";
  }
});
