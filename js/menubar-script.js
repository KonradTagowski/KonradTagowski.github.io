
function openMenu() {
    var link = document.createElement('link');
    link.href = "css/" + "Style-Menu.css";
    console.log(document.styleSheets[1].href)
    document.getElementById("main").style.transition = "margin-left .5s";
    document.getElementById("header").style.transition = "margin-left .5s";

    if (document.styleSheets[1].href == link.href) {
        document.getElementById("myside-menu").style.width = "165px";
        document.getElementById("main").style.marginLeft = "165px";
        document.getElementById("header").style.marginLeft = "165px";
    }
    else {
        document.getElementById("myside-menu").style.width = "165px";
        document.getElementById("main").style.marginLeft = "0px";
        document.getElementById("header").style.marginLeft = "0px";
    }
}

function closeMenu() {
    document.getElementById("myside-menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("header").style.marginLeft = "0";
}