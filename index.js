let users;
fetch("https://still-reaches-42847.herokuapp.com/show-users/")
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

  console.log(loggedIn);

  if (loggedIn.length > 0) {
    localStorage.setItem("user", JSON.stringify(loggedIn[0]));
    alert("Welcome Back", name);
    window.location.href = "./map.html";
  } else {
    alert("Credential Invalid");
  }
}
