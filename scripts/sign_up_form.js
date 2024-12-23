function validateForm(event){
    event.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;

    const fnameError = document.getElementById("fname-error");
    const lnameError = document.getElementById("lname-error");
    const ageError = document.getElementById("age-error");
    const genderError = document.getElementById("gender-error");
    const emailError = document.getElementById("email-error");

    fnameError.textContent = "";
    lnameError.textContent = "";
    ageError.textContent = "";
    genderError.textContent = "";
    emailError.textContent = "";

    let isValid = true;

    if (fname === "" || /^[0-9]+$/.test(fname)) {
        fnameError.textContent = "Please enter your first name properly."
        fnameError.style.fontSize = "18px";
        isValid = false;
    }
    if (lname === "" || /^[0-9]+$/.test(lname)) {
        lnameError.textContent = "Please enter your last name properly."
        lnameError.style.fontSize = "18px";
        isValid = false;
    }
    if (age === "" || age <= 0) {
        ageError.textContent = "Please enter your age properly."
        ageError.style.fontSize = "18px";
        isValid = false;
    }
    if (gender === "") {
        genderError.textContent = "Please select your gender."
        genderError.style.fontSize = "18px";
        isValid = false;
    }
    if (email === "" || !email.includes("@")){
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.fontSize = "18px";
        isValid = false;
    }
    return isValid;
}


document.getElementById("submit-sign-up-btn").addEventListener('click', function(event) {
    if (validateForm(event)) {
        showCustomAlert("Your information is submitted successfully!");
    } else {
        console.log("Form validation failed.");
    }
});

// Function to show the custom alert
function showCustomAlert(message) {
    // Display the modal
    const modal = document.getElementById("custom-alert");
    const alertMessage = document.getElementById("alert-message");
    alertMessage.textContent = message;

    modal.style.display = "block"; // Show the modal

    // When the "OK" button is clicked, hide the modal
    document.getElementById("modal-ok-btn").addEventListener('click', function() {
        modal.style.display = "none"; // Close the modal
    });
}