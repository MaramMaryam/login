<script>

    {
        function validateForm() {
            let x = document.forms["loginForm"]["email"].value;
            let y = document.forms["loginForm"]["pass"].value;

            if (x == "") {
                alert("email must be filled out");
                return false;
            }
        }
    }

</script>