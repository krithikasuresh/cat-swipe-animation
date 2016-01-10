function swipe() {
    $("#catpaw").velocity({
        translateX: "-30px",
        rotateZ: "-45deg" 
    });

    $("#catarm").velocity({
        translateX: "-20px", 
        translateY: "-15px"
    });

    $("#cathead").velocity({
        rotateZ: "10deg"
    });
}

function reset() {
    $("#catpaw").velocity({
        translateX: "0px",
        rotateZ: "0deg" 
    });

    $("#catarm").velocity({
        translateX: "0px", 
        translateY: "0px"
    });

    $("#cathead").velocity({
        rotateZ: "0deg"
    });
}

$("#catpaw").hover(function() {
    $("#catpaw").addClass(swipe());
    $("#catpaw").addClass(reset());
});

