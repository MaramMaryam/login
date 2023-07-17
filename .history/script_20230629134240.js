<script>
{/* const submit = document.querySelector("button[type=submit]");

submit.addEventListener("click", (e) => {
e.preventDefault();
//validating input code here
} */}
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
</script>