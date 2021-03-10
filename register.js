function register() {
  const form = document.getElementById("register-form");
  const inputs = form.getElementsByTagName("input");
  const user = {
    name: inputs[0].value,
    username: inputs[1].value,
    password: inputs[2].value,
    city: inputs[3].value,
  };

  fetch("https://still-reaches-42847.herokuapp.com/add-new-user/", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert(json.msg);
      window.location.href = "./index.html";
    })
    .catch((e) => alert(e));
}

// function reg() {
//   let inputs = document.getElementsByTagName("input");

//   let name = inputs[0].value;
//   let username = inputs[1].value;
//   let password = inputs[2].value;
//   let city = inputs[3].value;

//   let registered = users.filter((user) => {
//     return (
//       user.name == name &&
//       user.username == username &&
//       user.password == password &&
//       user.city == city
//     );
//   });

//   if (registered) {
//     alert("Successfully registered, Welcome");
//   } else {
//     alert("Credential Invalid");
//   }
// }
