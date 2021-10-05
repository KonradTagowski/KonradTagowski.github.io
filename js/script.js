var actual_StyleSheet = "StyleSheet.css";

function changeStyle(href) {
    for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].title == "Style") {
            document.getElementsByTagName('head')[0].removeChild(document.styleSheets[i].ownerNode);
        }
    }
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = "css/" + href;
    link.title = "Style";
    document.getElementsByTagName('head')[0].appendChild(link)
}

function openMenu() {
    document.getElementById("myside-menu").style.width = "150px";
    document.getElementById("main").style.marginLeft = "150px";
    console.log("Test - OpenMenu")
  }
  
  function closeNav() {
    document.getElementById("myside-menu").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }