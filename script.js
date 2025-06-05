const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

function fetchUsers() {
  userContainer.innerHTML = "<p>Loading users...</p>";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      if (!res.ok) throw new Error("Something went wrong!");
      return res.json();
    })
    .then(users => {
      userContainer.innerHTML = "";
      users.forEach(user => {
        const card = document.createElement("div");
        card.className = "user-card";
        card.innerHTML = `
          <h3>${user.name}</h3>
          <p><b>Email:</b> ${user.email}</p>
          <p><b>Address:</b> ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(card);
      });
    })
    .catch(error => {
      userContainer.innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}

reloadBtn.addEventListener("click", fetchUsers);
fetchUsers(); // Load on page open
