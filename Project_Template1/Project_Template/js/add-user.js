let users = JSON.parse(localStorage.getItem("userList")) || [];

let mainform = document.getElementById("add-new-user-form");
let userCodeInput = document.getElementById("user-code");
let backBtn = document.querySelector(".back-btn");

let newUserCode = `U${Date.now()}`;
userCodeInput.value = newUserCode;

backBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "http://127.0.0.1:5500/Project_Template/pages/dashboard.html";
});

mainform.addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let role = document.getElementById("role").value;
  let birthday = document.getElementById("dob").value;
  let status = document.querySelector('input[name="status"]:checked').value;
  let description = document.querySelector(".description-text-input").value.trim();

  let errorUsername = document.getElementById("errorUsername");
  let errorEmail = document.getElementById("errorEmail");
  let errorPassword = document.getElementById("errorPassword");

  errorUsername.innerText = "";
  errorEmail.innerText = "";
  errorPassword.innerText = "";

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexPass = /^.{8,}$/;

  let isValid = true;

  if (username === "") {
    errorUsername.innerText = "Tên không được để trống";
    errorUsername.style.color = "red";
    isValid = false;
  }

  if (email === "") {
    errorEmail.innerText = "Email không được để trống";
    errorEmail.style.color = "red";
    isValid = false;
  } else if (!regexEmail.test(email)) {
    errorEmail.innerText = "Email không đúng định dạng";
    errorEmail.style.color = "red";
    isValid = false;
  }

  if (password === "") {
    errorPassword.innerText = "Mật khẩu không được để trống";
    errorPassword.style.color = "red";
    isValid = false;
  } else if (!regexPass.test(password)) {
    errorPassword.innerText = "Mật khẩu tối thiểu 8 ký tự";
    errorPassword.style.color = "red";
    isValid = false;
  }

  if (isValid) {
    let newUser = {
      usercode: newUserCode,
      username: username,
      email: email,
      password: password,
      role: role,
      birthday: birthday,
      status: status,
      description: description,
    };

    users.push(newUser);
    localStorage.setItem("userList", JSON.stringify(users));
    alert("Thêm user thành công");
    window.location.href = "http://127.0.0.1:5500/Project_Template/pages/dashboard.html";
  }
});