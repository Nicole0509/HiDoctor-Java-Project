// Patient information variables
let button = document.querySelector(".patientInformationNext");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let phone = document.getElementById("phonenumber");
let emailaddress = document.getElementById("emailaddress");
let birthDate = document.getElementById("birthDate");
let insurance = document.getElementById("insurance");
let medicalFiles = document.getElementById("medicalFiles");

function sendData() {
    bookingConfirmation();
}

function bookingConfirmation() {
    let gender = document.querySelector('input[name="gender"]:checked');
    localStorage.setItem("Firstname", firstname.value);
    localStorage.setItem("Lastname", lastname.value);

    if (gender) {
        localStorage.setItem("Gender", gender.value);
    } else {
        // Handle the case when no gender is selected
        console.error("No gender selected");
    }

    localStorage.setItem("phone", phone.value);
    localStorage.setItem("email", emailaddress.value);
    localStorage.setItem("born_on", birthDate.value);
    localStorage.setItem("insurance", insurance.value);
    localStorage.setItem("medicalFiles", medicalFiles.value);

    window.location.href = "./bookpatientinformation.html";
}
