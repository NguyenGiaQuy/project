let users = JSON.parse(localStorage.getItem("userList")) || [];

let mainform = document.getElementById("sign-in-form");

mainform.addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  let errorEmail = document.getElementById("errorEmail");
  let errorPassword = document.getElementById("errorPassword");
  let errorLogin = document.getElementById("errorLogin");

  errorEmail.innerText = "";
  errorPassword.innerText = "";
  errorLogin.innerText = "";

  let isValid = true;

  if (email === "") {
    errorEmail.innerText = "Email không được để trống";
    errorEmail.style.color = "red";
    isValid = false;
  }

  if (password === "") {
    errorPassword.innerText = "Mật khẩu không được để trống";
    errorPassword.style.color = "red";
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  let foundUser = null; 

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      foundUser = users[i];
      break; 
    }
  }

  if (foundUser === null) {
    errorLogin.innerText = "Email hoặc mật khẩu không tồn tại.";
    errorLogin.style.color = "red";
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(foundUser));

  alert("Đăng nhập thành công");
  window.location.href = "http://127.0.0.1:5500/Project_Template/pages/dashboard.html";
});