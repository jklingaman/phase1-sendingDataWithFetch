// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     });

let name = "Steve";
let email = "steve@steve.com";

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then(res => res.json())
    .then(e => {
        const main = document.querySelector('div');
        main.innerHTML = `
        <h1>The users ID is ${e.id}</h1>
        `
    })
    .catch(error => {
        const main = document.querySelector('div');
        main.innerHTML = `
        <h2>There was an error proccessing your response, ${error.message}</h2>
        `
    });
}

function initilaizer() {
    submitData()
}
initilaizer()


//     .then(response => response.json())
//     .then(data => {
//         console.log("Success:", data);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     }));
// }