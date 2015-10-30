window.onscroll = function () {

    if (document.documentElement.scrollTop + document.body.scrollTop > 200) {
        document.getElementById("updown").style.display = "block";
    }
    if (document.documentElement.scrollTop + document.body.scrollTop < 200) {
        document.getElementById("updown").style.display = "none";
    }
    else {
        document.getElementById("updown").style.display = "block";
    }
}

jQuery(document).ready(function($) {
    $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $("html") : $("body")) : $("html,body");
    $("#upup").click(function() {
        $body.animate({
            scrollTop: 0
        },
        1200)
    });
    $("#downdown").click(function() {
        $body.animate({
            scrollTop: $(document).height()
        },
        1200)
    });
    
});




