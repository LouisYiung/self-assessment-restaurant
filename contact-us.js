 // i do understand this regex is not exhaustive and disallows emails such as ....@...com and excludes lots of punctuations and other characters, but i feel for an assignment such as this; this regex is enough
 const emailRegex = /[0-9a-zA-Z]+@[0-9a-zA-Z]+.{2,3}[a-z]/;
 const submitButton = document.querySelector('[data_Submit]');
 const resetButton = document.querySelector("[data-Reset]");

 function validateEmail() {
     if (!document.querySelector("[data_Email]").value.match(emailRegex)) {
         alert("this email is not valid.");
     } else {
         alert("this email is valid.")
     }
     /* this is a version of the code that runs on typing up the email, that check on each keystroke whether or not the email is valid
     if (!document.getElementById("Email").value.match(emailRegex)) {
         button.disabled = true;
     } else {
         button.disabled = false;
     }*/
 }

 /*function submitFunction() {
     alert("form is good, form is submitted");
 }*/

 function resetForm() {
     var inputs = document.getElementsByTagName('input');
     for (var i = 0; i < inputs.length; i += 1) {
         if (inputs[i].type == "text" || inputs[i].type == "email") {
             inputs[i].value = '';
         }
         if (inputs[i].type == "checkbox" || inputs[i].type == "radio") {
             inputs[i].checked = false;
         }
         document.querySelector("[data_Reason]").value = "default";
     }
 }

 submitButton.addEventListener('click', validateEmail);
 resetButton.addEventListener('click', resetForm);