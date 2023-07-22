
// var value = document.getElementById('0x68ca0C62408B1D1F9C90f7325b52FA83185F27FD').value;

// if(value === "0x68ca0C62408B1D1F9C90f7325b52FA83185F27FD"){
//     alert("correctVAlue");
// }else{
//     alert("incorrect value");
// }

function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form values
    const provider = document.getElementById('provider').value;
    const userid = document.getElementById('userid').value;
    const password = document.getElementById('password').value;

    // // Perform any additional validation if needed

    // // Perform actions with the form data (e.g., send data to the server, process it, etc.)
    // console.log('Form submitted!');
    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('Message:', message);

    // // Optionally, you can send the data to the server using Ajax or any other method
    // // For this example, we'll just display a success message
    if(userid == "0x68ca0C62408B1D1F9C90f7325b52FA83185F27FD" && password == "Usman@123"){
        window.location.href = "../index_home.html";
    }else{
        alert('Wrong Password or ID');

    }
    
  }