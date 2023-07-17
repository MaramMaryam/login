<script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>

const validation = new JustValidate('#form', {
    errorFieldCssClass: 'is-invalid',
});

validation
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);

        // function validateForm(e) {
        //     e.preventDefault();
        //     let x = document.forms["loginForm"]["email"].value;
        //     let y = document.forms["loginForm"]["password"].value;

        //     if (x == "") {
        //         text = "email not valid";
        //         alert("email not valid")
        //         return false;
        //     }
        //     if (y == "") {
        //         text = "password not valid";
        //         return false;
        //     }
        //     document.getElementById("demo").innerHTML = text;
        // }


