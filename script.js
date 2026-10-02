function showMessage() {
    alert("Hello! Your JavaScript is working.");
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("result").textContent =
        "Hello " + name + "! Your form was submitted successfully.";
}