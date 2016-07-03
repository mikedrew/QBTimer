
var ss = document.createElement('script');
ss.src = chrome.extension.getURL('jquery-2.1.3.min.js');
(document.head||document.documentElement).appendChild(ss);


ss.onload = function() {
    ss.parentNode.removeChild(ss);
};



var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);


s.onload = function() {
    s.parentNode.removeChild(s);
};



