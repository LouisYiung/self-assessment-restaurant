//this is just a copy paste of the javascript code that is on the contact us page.
//I alsow understand that it is generally a better standard to seperate the the javascript from the page as it saves time to debug and maintain
//if i were better, i would be able to make this work as such, but due to constraints on time and my want to submit this asap, i am going with the on page implementation 

const emailRegex = /[0-9a-zA-Z]+@[0-9a-zA-Z]+.{2,3}[a-z]/;
let button = document.getElementById("submit");

function validateEmail() {
    var edValue = document.getElementById("Email");
    var s = edValue.value;

    if (!document.getElementById("Email").value.match(emailRegex)) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

function submitFunction() {
    alert("form is good, form is submitted");
}