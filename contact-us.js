 // i do understand this regex is not exhaustive and disallows emails such as ....@...com and excludes lots of punctuations and other characters, but i feel for an assignment such as this; this regex is enough
 const emailRegex = /[0-9a-zA-Z]+@[0-9a-zA-Z]+.{2,3}[a-z]/;
 let button = document.getElementById("submit");

 function validateEmail() {
     var edValue = document.getElementById("Email");
     var s = edValue.value;
     console.log("submit was pressed")
     if (!document.getElementById("Email").value.match(emailRegex)) {
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
     var inputs, index;

     inputs = document.getElementsByTagName('input');
     for (index = 0; index < inputs.length; ++index) {
         console.log(index);
         //inputs[index].value = false;
     }
 }