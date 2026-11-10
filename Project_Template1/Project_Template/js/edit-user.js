let users = JSON.parse(localStorage.getItem("userList")) || [];

let editUserCode = localStorage.getItem("editUserCode");

let mainform = document.getElementById("edit-user-form");
let backBtn = document.querySelector(".back-btn");

let editIndex = null;

for (let i = 0; i < users.length; i++) {
  if (users[i].usercode === editUserCode) {
    editIndex = i;
    break;
  }
}

let user = users[editIndex];

document.getElementById("user-code").value = user.usercode;
document.getElementById("username").value = user.username;
document.getElementById("email").value = user.email;
document.getElementById("password").value = user.password;
document.getElementById("role").value = user.role;
document.getElementById("dob").value = user.birthday;
document.querySelector(".description-text-input").value = user.description;

backBtn.addEventListener("click", function () {
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
    users[editIndex].username = username;
    users[editIndex].email = email;
    users[editIndex].password = password;
    users[editIndex].role = role;
    users[editIndex].birthday = birthday;
    users[editIndex].status = status;
    users[editIndex].description = description;

    localStorage.setItem("userList", JSON.stringify(users));
    alert("Sửa thông tin thành công");
    window.location.href = "http://127.0.0.1:5500/Project_Template/pages/dashboard.html";
  }
});