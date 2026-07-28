function validateForm() {

    // Get form values
    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const contact = document.getElementById("contact").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validate Name
    if (name === "") {
        alert("Name is required.");
        return false;
    }

    // Validate Password
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{6,}$/;

    if (!passwordRegex.test(password)) {
        alert(
            "Password must be at least 6 characters and include:\n" +
            "- One lowercase letter\n" +
            "- One uppercase letter\n" +
            "- One number\n" +
            "- One special character"
        );
        return false;
    }

    // Validate Age
    if (isNaN(age) || age < 18) {
        alert("Please enter a valid age (18 or above).");
        return false;
    }

    // Validate Contact Number
    const contactRegex = /^\d{10}$/;

    if (!contactRegex.test(contact)) {
        alert("Contact number must contain exactly 10 digits.");
        return false;
    }

    // Validate Email
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
