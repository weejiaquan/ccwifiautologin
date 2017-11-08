// ==UserScript==
// @name         Auto Login (Columbia College) Student
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://captiveportal-login.columbiacollege.bc.ca/cgi-bin/login*
// @grant        none
// ==/UserScript==



//Change USERID and PASSWORD accordingly
window.onload = function(){
    var f = document.getElementById("regform");
    f.elements.namedItem("user").value = "USERID";
    f.elements.namedItem("password").value = "PASSWORD";
    f.submit();
   
}
