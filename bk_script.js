// Wrapping Javasscript in anonymous function to make sure it'll run when script is called/loaded

// Adds myBookmarklet to the global window object
(window.myBookmarklet = function() {
  // your JavaScript code goes here!
  alert("without jquery works");

})();

