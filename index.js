//  1. API url
const url = "https://jsonplaceholder.typicode.com/users";
const ul = document.getElementById("ul");

function fetchUsers() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      renderUsers(data);
    });
}
fetchUsers();
function renderUsers(users) {
  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <span>${index + 1}</span>
    <span>${user.name}</span>
    <span>-</span>
     <span class="username">${user.username}</span>
    `;
    ul.appendChild(li);
  });
}

function searchUserByUsername() {
  const search = document.getElementById("search").value;
  const inputValue = search.toLowerCase();
  const userList = document.querySelectorAll("li");
  for (let index = 0; index < userList.length; index++) {
    const usernameSpanTag = userList[index].querySelector(".username");

    const usernameSpanTagValue = usernameSpanTag.innerText.toLowerCase();
    const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

    if (isMatch) {
      userList[index].style.display = "block";
    } else {
      userList[index].style.display = "none";
    }
  }
}
