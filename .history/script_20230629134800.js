<script>

    {
        function validateForm() {
            let x = document.forms["loginForm"]["email"].value;
            let y = document.forms["loginForm"]["password"].value;

            if (x == "") {
                text = "Input not valid";
                alert("email must be filled out");
                return false;
            }
            if (y == "") {
                alert("password must be filled out");
                return false;
            }
        }
    }

</script>