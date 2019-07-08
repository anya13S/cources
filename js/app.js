var confirmButtom = document.getElementById('confirm');
confirmButtom.addEventListener('click', saySmth);

function saySmth(event) {
    console.log(event)
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    if (firstName.length < 5 || lastName.length < 5) {
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        return;
    }

    var user = {
        firstName: firstName,
        lastName: lastName
    };
    console.log(user);
}