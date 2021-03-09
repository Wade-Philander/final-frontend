// console.log(user_data);
function mod() {
  let user_data = JSON.parse(localStorage.getItem("user"));
  let modal = `
  <div class ="user_info" id="user${user_data.id} style =">
     <p id="name"> Name : ${user_data.name} </p>
     <p id="username"> Username : ${user_data.username} </p>
     <p id="password"> Password : ${user_data.password} </p>
     <p id="city"> Location : ${user_data.city} </p>
  </div>
  
   `;
  console.log("Hello ", user_data);
  let body = document.getElementById("user-data");
  body.innerHTML += modal;
}
mod();

function delete(id) {
  if (confirm("Are you sure you want to delete your profile")) {
    fetch;
  }
}
