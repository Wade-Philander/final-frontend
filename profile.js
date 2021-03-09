function view_profile() {
  const form = document.getElementById("register-form");
  const inputs = form.getElementsByTagName("input");
  const users = {
    name: inputs[0].value,
    username: inputs[1].value,
    password: inputs[2].value,
    city: inputs[3].value,
  };

  let logged = users.filter((user) => {
    return user.username == username && user.password == password;
  });
  console.log(logged);
}

// function mod() {
//   let modal = `
//   <div class ="modal" id="user${users.id}" style="top: -100%">
//   // <img id="display" src="${users.image}"/>
//   <div class="user-info">
//     <p1 id="name"> Name : ${users.name} </p1>
//     <p1 id="username"> Username : ${users.username} </p1>
//     <p1 id="password"> Password : ${users.password} </p1>
//     <p1 id="city"> Location : ${users.city} </p1>
//   </div>
//   `;
//   let body = document.getElementById("profile");
//   body.innerHTML += modal;
// }
