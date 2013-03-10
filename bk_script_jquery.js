// Wrapping Javasscript in anonymous function to make sure it'll run when script is called/loaded
// USes jQuery for easy manipulating of DOM elements (Can be removed if desired)

(function(){

  // First checks if jQuery is loaded on the current webpage
  // the minimum version of jQuery we want
  var v = "1.9.1";

  // check prior inclusion and version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    var done = false;
    var script = document.createElement("script");
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
    script.onload = script.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        done = true;
          initBookmarkletScript();
      }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  } else {
    initBookmarkletScript();
  }


  function initBookmarkletScript() {
    // Adds myBookmarklet into global window object

    (window.myBookmarklet = function() {
      // your JavaScript code goes here!

      if ($("#bkOverlay").length === 1 ) {
        $("#bkOverlay").css("display", "block");
        $("#bkOverlay").html(getSelText());
        //console.log(getSelText());
      } else {
        createOverlay();
      }


      //---- All functions go below here ----
      function createOverlay() {
        var overlay = "<div id='bkOverlay' style='position:fixed;display:hidden;overflow:hidden;top:10px;right:10px;width:300px;height:100px;background-color:LightGray'>"

        $("body").append(overlay);
      }

      function getSelText() {
      // Get text selection
        var SelText = '';
        if (window.getSelection) {
          SelText = window.getSelection();
        } else if (document.getSelection) {
          SelText = document.getSelection()
        } else if (document.selection) {
          SelText = document.selection.createRange().text;
        }

        return SelText.toString();
      }
    })();
  }

})();
