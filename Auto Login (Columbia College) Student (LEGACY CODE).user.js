// ==UserScript==
// @name         Auto Login (Columbia College) Student
// @namespace    Lychwee
// @version      1
// @description  try to take over the world!
// @author       Lychwee
// @match        *://captiveportal-login.columbiacollege.bc.ca/cgi-bin/login*
// EDIT @match to match with your portal login URL
// @grant        none
// ==/UserScript==



//Change USERID and PASSWORD accordingly
window.onload = function(){
    var f = document.getElementById("regform");
    f.elements.namedItem("user").value = "USERID";
    f.elements.namedItem("password").value = "PASSWORD";
    f.submit();
   
}
