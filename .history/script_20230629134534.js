<script>
    {
        function validateForm() {
            let x = document.forms["loginForm"]["email"].value;

            if (x == "") {
                alert("email must be filled out");
                return false;
            }
        }
    }

</script>