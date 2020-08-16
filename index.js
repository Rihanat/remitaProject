var input = document.querySelector("#phone");
window.intlTelInput(input, {
        initialCountry: "auto",
        geoIpLookup: function(success, failure) {
        $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
        success(countryCode);
    });
},
    utilsScript: "build/js/utils.js",
});
function validate() {
    var firstName = document.getElementById("firstName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var lastName = document.getElementById("lastName").value;
    var errorText = document.getElementById("error-id");

    var message;

    errorText.style.padding = "20px";
    if(firstName.length < 3) {
        message = "Enter A Valid First Name"
        errorText.innerHTML = message
        return false
    } 

    if(lastName.length < 3) {
        message = "Enter A Valid Last Name"
        errorText.innerHTML = message
        return false
    } 

    if(email.indexOf('@') == -1 || email.length < 7) {
        message = "Enter A Valid Email Address"
        errorText.innerHTML = message
        return false
    }

    if(isNaN(phone) || phone.length < 10) {
        message = "Enter A Valid Phone Number"
        errorText.innerHTML = message
        return false
    }

    if (select.isEmpty == true) {
        message = "Select an option"
        errorText.innerHTML = message
        return false
    }

    alert("Form submitted Successfully")

    return true
}
module.exports = require("./build/js/intlTelInput");
