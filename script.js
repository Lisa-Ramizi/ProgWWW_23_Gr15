function showAlert() {
    
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var appointmentDate = document.getElementById("appointmentDate").value;

    
    saveFormData(firstName, lastName, email, appointmentDate);

    
    alert("Booking submitted successfully!");

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("appointmentDate").value = "";
}

function saveFormData(firstName, lastName, email, appointmentDate) {
    
    if (typeof(Storage) !== "undefined") {
        
        var formDataArray = JSON.parse(localStorage.getItem("formData")) || [];

        var formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            appointmentDate: appointmentDate
        };

        formDataArray.push(formData);

        localStorage.setItem("formData", JSON.stringify(formDataArray));

        console.log("Form data saved:", formDataArray);
    } else {
        console.error("Local storage is not supported in this browser.");
    }
}


