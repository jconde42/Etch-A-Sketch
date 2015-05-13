var border = false;

$(document).ready( function() {
    for( var i = 0; i < 625; i++) {
        $("#container").append("<div class='square'></div>");
    }

    $(".square").hover( function() {
        $(this).addClass("black");
    })

    $(document.getElementById("reset")).click( function() {
        $(".black").removeClass("black");
    });

    $(document.getElementById("grid")).click( function() {

        if ( !(border) ) {
            $(".square").css("border", "1px solid black");
        }

        if ( border ) {
            $(".square").css("border", "");
        }

        border = !border;
    })

    $(document.getElementById("resize")).click( function() {
        var rows = prompt("How many rows would you like? (1 - 25)");
        var cols = prompt("How many columns would you like? (1 - 25)");

        var newHeight = Math.floor(560/rows);
        var newWidth = Math.floor(560/cols);

        if( border) {
           $(".square").css("border", "");
       }

       $(".square").width(newWidth + "px");
       $(".square").height(newHeight + "px");

       if( border) {
           $(".square").css("border", "1px solid black");
       }

   })
})