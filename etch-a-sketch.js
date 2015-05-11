$(document).ready( function() {
    for( var i = 0; i < 256; i++) {
        $("#container").append("<div class='square'></div>");
    }

    $(".square").hover( function() {
        $(this).addClass("black");
    })

    $(document.getElementById("reset")).click( function() {
        $(".black").removeClass("black");
    });

})