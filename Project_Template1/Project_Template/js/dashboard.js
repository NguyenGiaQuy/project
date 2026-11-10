let users = JSON.parse(localStorage.getItem("userList")) || [];

let tableBody = document.getElementById("table-body");
let searchBox = document.getElementById("search-box");

function hienThiBang() {
  let keyword = searchBox.value.trim().toLowerCase();

  tableBody.innerHTML = "";

  users.forEach((user) => {
    if (!user.username.toLowerCase().includes(keyword)) {
      return;
    }

    let tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${user.usercode}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.role}</td>
      <td>${user.birthday}</td>
      <td>${user.status}</td>
      <td>
        <button class="btn-edit" onclick="suaNguoiDung('${user.usercode}')">
          <i class="fa-solid fa-pen"></i>
        </button>
        <button class="btn-delete" onclick="xoaNguoiDung('${user.usercode}')">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    `;

    tableBody.appendChild(tr);
  });

  if (tableBody.innerHTML === "") {
    tableBody.innerHTML = `<tr><td colspan="7">Không tìm thấy người dùng nào</td></tr>`;
  }
}

function xoaNguoiDung(usercode) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].usercode === usercode) {
      users.splice(i, 1);
      break;
    }
  }

  localStorage.setItem("userList", JSON.stringify(users));
  hienThiBang();
}

function suaNguoiDung(usercode) {
  localStorage.setItem("editUserCode", usercode);
  window.location.href = "./edit-user.html";
}

searchBox.addEventListener("input", hienThiBang);

hienThiBang();