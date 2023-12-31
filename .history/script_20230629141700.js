

const validation = new JustValidate('#form', {
    errorFieldCssClass: 'is-invalid',
});
// apply rules to form fields
validation
.addField('#name', [
  {
    rule: 'minLength',
    value: 3,
  },
  {
    rule: 'maxLength',
    value: 30,
  },
])
.addField('#email', [
  {
    rule: 'required',
    errorMessage: 'Field is required',
  },
  {
    rule: 'email',
    errorMessage: 'Email is invalid!',
  },
])
.addField('#password', [
  {
    rule: 'password',
  },
])
.addField('#message', [
  {
    validator: (value) => {
      return value[0] === '!';
    },
  },
])
.addField('#consent_checkbox', [
  {
    rule: 'required',
  },
])
.addField('#favorite_animal_select', [
  {
    rule: 'required',
  },
])
.addRequiredGroup(
  '#read_terms_checkbox_group',
  'You should select at least one communication channel'
)
.addRequiredGroup('#communication_radio_group')
.onSuccess((event) => {
  console.log('Validation passes and form submitted', event);
});


        function validateForm(e) {
            e.preventDefault();
            let x = document.forms["loginForm"]["email"].value;
            let y = document.forms["loginForm"]["password"].value;

            if (x == "") {
                text = "email not valid";
                alert("email not valid")
                return false;
            }
            if (y == "") {
                text = "password not valid";
                return false;
            }
            document.getElementById("demo").innerHTML = text;
        }


