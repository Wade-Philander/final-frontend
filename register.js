let users;

fetch("https://evening-fortress-12445.herokuapp.com/show-users/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    users = data;
  });

function login() {
  let inputs = document.getElementsByTagName("input");

  let username = inputs[0].value;
  let password = inputs[1].value;

  let loggedIn = users.filter((user) => {
    return user.username == username && user.password == password;
  });

  if (loggedIn) {
    alert("Successfully registered, Welcome");
    window.location.href = "./";
  } else {
    alert("Credential Invalid");
  }
}
