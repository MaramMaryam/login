


        function validateForm() {
            let x = document.forms["loginForm"]["email"].value;
            let y = document.forms["loginForm"]["password"].value;

            if (x == "") {
                text = "email not valid";
                return false;
            }
            if (y == "") {
                text = "password not valid";
                return false;
            }
            document.getElementById("demo").innerHTML = text;
        }


