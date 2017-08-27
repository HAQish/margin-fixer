// ==UserScript==
// @name         marginfixer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fixes margins on txt files
// @author       You
// @match        http://*/*.txt
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    $(document).ready(function() {
       $("body").text(fixmargins($("body")));
    });
    
    
    
})();

function fixmargins(body) {
   var arrayOfParagraphs = JSON.stringify(body).split("/n/n");
   var arrayOfFixedParagraphs = arrayOfParagraphs.map(el => el.split("/n").join(" "));
   var fixedDocument = arrayOfFixedParagraphs.join("/n/n");
   return fixedDocument;
}
