var actual_StyleSheet = "StyleSheet.css";

function changeStyle(href, id_StyleSheet) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = "css/" + href;
    document.getElementsByTagName('head')[0].replaceChild(link, document.styleSheets[id_StyleSheet].ownerNode);
openMenu();
closeMenu();
openMenu();
}

