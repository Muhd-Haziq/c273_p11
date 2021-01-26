
$(document).ready(function () {

    if (JSON.parse(localStorage.getItem("person")) != null) {
        var person = JSON.parse(localStorage.getItem("person"));
        var message = "";

        for (i = 0; i < person.length; i++) {
            message += "Name: " + person[i].name + "<br/>";
            message += "Email: " + person[i].email + "<br/>";
            message += "Postal Code: " + person[i].postalCode + "<br/><br/>";
        }

        $('#results').html(message);
    }


});