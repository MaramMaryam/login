<script>

    {
        function validateForm() {
            let x = document.forms["loginForm"]["email"].value;
            let y = document.forms["loginForm"]["password"].value;

            if (x == "") {
                text = "email not valid";
                return false;
            }
            if (y == "") {
                text = "password not valid";

                alert("password must be filled out");
                return false;
            }
        }
    }

</script>