var actual_StyleSheet = "StyleSheet.css";

function changeStyle(href, id_StyleSheet) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = "css/" + href;
    document.getElementsByTagName('head')[0].replaceChild(link, document.styleSheets[id_StyleSheet].ownerNode);

    //  for (var i = 0; i < document.styleSheets.length; i++) {
    //      if (document.styleSheets[i].title == id_title) {
    //          //document.getElementsByTagName('head')[0].removeChild(document.styleSheets[i].ownerNode);
    //          document.getElementsByTagName('head')[0].replaceChild(link, document.styleSheets[i].ownerNode);
    //      }
    //  }
    // document.getElementsByTagName('head')[0].appendChild(link)


}