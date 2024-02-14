// INMT 443 Validation for HTML
// Grant Cates

// Function to validate the form
function formValidation() {
    // Saving the user data values into variables
    const raceCategory = document.getElementById("raceCategory").value;
    const usatMembershipID = document.getElementById("usatMembershipID").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const zipCode = document.getElementById("zipCode").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const ethnicity = document.querySelectorAll('input[name="ethnicity"]:checked');
    const dob = document.getElementById("dob").value;
    const emergencyContactName = document.getElementById("emergencyContactName").value;
    const emergencyContactPhone = document.getElementById("emergencyContactPhone").value;
    const waiverAgreement = document.querySelector('input[name="waiverAgreement"]:checked');
    const tshirtSize = document.getElementById("tshirtSize").value;
    const email = document.getElementById("email").value;
    const aboutMe = document.getElementById("aboutMe").value;

    // Validate raceCategory
    if (raceCategory === "") {
        alert("Please select a race category.");
        return false;
    }

    // Validate usatMembershipID
    if (!/^\d{10}$/.test(usatMembershipID)) {
        alert("USAT Membership ID must be a 10-digit number.");
        return false;
    }

    // Validate name
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    // Validate address
    if (address === "") {
        alert("Please enter your address.");
        return false;
    }

    // Validate gender
    if (!gender) {
        alert("Please select your gender.");
        return false;
    }

    // Validate ethnicity
    if (ethnicity.length === 0) {
        alert("Please select at least one ethnicity option.");
        return false;
    }

    // Validate emergencyContactName
    if (emergencyContactName === "") {
        alert("Please enter the emergency contact's name.");
        return false;
    }

    // Validate waiverAgreement
    if (!waiverAgreement) {
        alert("Please agree to the waiver.");
        return false;
    }

    // Validate password
    if (!validatePassword(password)) {
        alert("Password must have at least 8 characters, one digit, and one special character.");
        return false;
    }

    // Validate Zip Code
    if (!validateZipCode(zipCode)) {
        alert("Please enter a valid 5-digit Zip Code.");
        return false;
    }

    // Validate Date of Birth
    if (!validateDateOfBirth(dob)) {
        alert("Please enter a valid date of birth within an acceptable age range.");
        return false;
    }

    // Validate Emergency Contact Phone Number
    if (!validateEmergencyContactPhone(emergencyContactPhone)) {
        alert("Please enter a valid 10-digit Emergency Contact Phone Number.");
        return false;
    }

    // Validate tshirtSize
    if (!validateTshirtSize(tshirtSize)) {
        alert("Please select a valid t-shirt size.");
        return false;
    }

    // Validate email
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // All validations passed, allow form submission
    alert("Your registration has been submitted!");
    return true;
}

// Function to validate password
function validatePassword(password) {
    return /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
}

// Function to validate zipCode (assuming a 5-digit format)
function validateZipCode(zipCode) {
    return /^\d{5}$/.test(zipCode);
}

// Function to validate dob 
function validateDateOfBirth(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    return age >= 18 && age <= 100;
}

// Function to validate emergencyContactPhone 
function validateEmergencyContactPhone(phone) {
    return /^\d{3}-\d{3}-\d{4}$/.test(phone); //(assuming a format like "123-456-7890")
}

//  validate tshirtSize //
function validateTshirtSize(size) {
    const validSizes = ["S", "M", "L", "XL"]; // (assuming a predefined list of valid sizes)
    return validSizes.includes(size);
}

// validate email //
function validateEmail(email) {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email); //user must type in a email in correct format
}

document.querySelector("form").addEventListener("submit", function (event) {
    if (!formValidation()) {
        event.preventDefault();
    }
});

