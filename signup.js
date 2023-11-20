document.getElementById("btn").addEventListener("click", ()=> {
    let name1 = document.getElementById("name")
    let email = document.getElementById("email")
    let passwoord = document.getElementById("password")

    let validname = /^[A-Za-z]{5,}$/;
    let validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let validPassword = /^[0-9A-Za-z]{4,}$/;

    if (name1 === "" || email=== "" || passwoord === ""){

        alert("fill empty fields")

    }

    else if (!validname.test(name1.value)) {

        alert("wrong name")
    }
    else if (!email.value.match(validEmail)) {

        alert("wrong email")

    }

    else if (!passwoord.value.match(validPassword)){

        alert("wroong passowrd")

    }
    else {
fetch('https://655b3643ab37729791a8b883.mockapi.io/user', {
  method: 'POST',
  body: JSON.stringify({
    name1:name1.value,
    email:email.value,
    passwoord:passwoord.value

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  })
  .then(response => response.json())
  window.location.href="login.html";
console.log("success");


        
    }
})