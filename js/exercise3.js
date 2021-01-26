
$(document).ready(function () {

    if (JSON.parse(localStorage.getItem("person")) != null) {
        var person = JSON.parse(localStorage.getItem("person"));
        var message = "";

        message += "Name: " + person.name + "<br/>";
        message += "Email: " + person.email + "<br/>";
        message += "Postal Code: " + person.postalCode + "<br/>";

        $('#results').html(message);
    }


});