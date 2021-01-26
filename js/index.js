
$(document).ready(function () {
    reload();
    

    if (JSON.parse(localStorage.getItem("movies")) != null) {
        var movies = JSON.parse(localStorage.getItem("movies"));
    }
    
    
    $('[name=btnDelete]').click(function () {
        var val = $(this).val();
        console.log(movies.length);
        movies.splice(val, 1);
        //console.log(val);
        //console.log(movies);
        localStorage.setItem("movies", JSON.stringify(movies));
        reload();
        
        //console.log(movies.length);
    });
    
});

function reload() {
    if (JSON.parse(localStorage.getItem("movies")) != null) {
        var movies = JSON.parse(localStorage.getItem("movies"));
        var message = "";

        for (i = 0; i < movies.length; i++) {
            message += '<div class="card"><div class="card-header">' + movies[i].title + '<br><button class="btn btn-danger" name="btnDelete" value="' + i + '">Delete</button></div><div class="card-body">' + movies[i].plot + '<br>' + movies[i].poster + '</div></div><br>'
            
        }

        $('#contents').html(message);
    }
}