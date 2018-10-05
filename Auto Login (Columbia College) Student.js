// ==UserScript==
// @name         Auto Login (Columbia College) Student
// @namespace    Lychwee
// @version      1
// @description  try to take over the world!
// @author       Lychwee
// @match        *captiveportal-login.columbiacollege.bc.ca/swarm.cgi?*
// EDIT @match to match with your portal login URL
// @grant        none
// ==/UserScript==



//Change USERID and PASSWORD accordingly
window.onload = function(){
    check();
}
function check() {
    document.getElementById("agree-yes").checked = true;
    document.getElementById("user").value = "USER";
    document.getElementById("password").value = "PASS";
    document.getElementsByTagName("input")[5].click();
}
