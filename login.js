// document.addEventListener("click", () =>{
//     let name1 = document.getElementById("name")
// let password = document.getElementById("password")
// if (name1.value === "" || password.value === ""){
// alert("empty")
// }
// else {
// fetch("" , {method: 'get'})
//     .then((response) => response.json())
//    .then ((data) => {


// let uservalid = data.find((d) => name1.value === d.name1 && password.value === d.password
// );

// if(!uservalid) {
// alert("wrong")
// }
// else {

// localStorage.setItem("user", name1.value)
// console.log("sucess");
// }
//    })

// }
// })





document.getElementById("btn").addEventListener("click", () => {
    let name1 = document.getElementById("name");
    let passwoord = document.getElementById("password");
    

    if (name1.value === "" || passwoord.value === "") {
 
      // alert("input in empty");
    } else {
      fetch("https://655b3643ab37729791a8b883.mockapi.io/user")
        .then((response) => response.json())
        .then((data) => {
          let userValid = data.find(
            (d) => name1.value === d.name1 && passwoord.value === d.passwoord
          );

          if (!userValid) {
            alert("name or password is invalid");

          } else {
            localStorage.setItem("User", name1.value);
            // window.location.href = "blog.html";
            console.log("sucess");
          }
        });
    }





  });


