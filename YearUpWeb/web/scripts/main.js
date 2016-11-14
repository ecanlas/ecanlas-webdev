document.addEventListener("DOMContentLoaded", function() {

    document
        .getElementById("login-form")
        .addEventListener("submit", function(event) {
            event.preventDefault();

            //Assign variables for first and last name
            var email = document
                .getElementById("email")
                .value;

            var password = document
                .getElementById("password")
                .value;

            //Check to make sure first and last name are not blank
            if (email === "" || password === "") {
                alert("Please enter a username and a last name!");
                return;
            }


            // Check to make sure the cc number is 16 digits and only numbers:

            //parseInt() - Takes a string and converts it to an integer OR if it is not a number returns NaN

            //isNaN() - A function that takes a value and returns true or false based on if the value is NOT a number

            //.length - A property that gives you the length of a string

            //Step 1: Use .length to check that CC number is 16 digits

            //Step 2: Convert string from form into number using parseInt

            //Step 3: Use isNaN to check if the resulting number is a number



        });



});







