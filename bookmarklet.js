// Insert code into bookmark
// Replace my_script with custom name
// Replace my_script.src with URL to bookmarklet script

// Method 1
// Adds to <head>
javascript:(function(){
my_script=document.createElement('SCRIPT');
my_script.type='text/javascript';
my_script.src='http://10.0.1.9/bookmarklet/bk_script.js';
document.getElementsByTagName('head')[0].appendChild(my_script);})();

// Method 2 - shorter
// Adds to <body>
javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://10.0.1.9/bookmarklet/bk_script.js';})();
