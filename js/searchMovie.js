
$(document).ready(function () {

    var movies = JSON.parse(localStorage.getItem("movies"));
    if (movies == null) {
        movies = [];
        //alert(persons);
    }

    $('#btnSearch').click(function () {
        var title = $("#sTitle").val();
        var year = $("#sYear").val();
        var plot = $("#sPlot").val();
        var msg = "";
        var poster = "";



        //console.log(title + year + plot);

        $.ajax({
            type: "GET",
            url: "http://www.omdbapi.com",
            data: "t=" + title + "&y=" + year + "&plot=" + plot + "&apikey=19c0fc0b",
            dataType: "jsonp",
            success: function (response) {
                console.log(response);
                var movie = {};
                movie.title = response.Title;
                movie.plot = response.Plot;
                movie.poster = "<img src='" + response.Poster + "'/>";
                movies.push(movie);

                msg += "<p><b>Title</b>: " + response.Title + "<br/>"
                        + "<b>Released</b>: " + response.Released + "<br/>"
                        + "<b>Runtime</b>: " + response.Runtime + "<br/>"
                        + "<b>Genre</b>: " + response.Genre + "<br/>"
                        + "<b>Actors</b>: " + response.Actors + "<br/>"
                        + "<b>Plot</b>: " + response.Plot + "</p><br/>";
                poster = "<img src='" + response.Poster + "'/>";

                $('#contents').html(msg);
                $('#poster').html(poster);
                localStorage.setItem("movies", JSON.stringify(movies));
            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });

    });


});