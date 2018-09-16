var script = document.createElement("script")
script.type = "text/javascript";
//Chrome,Firefox, Opera, Safari 3+
script.onload = function(){
console.log("Script is loaded");
};
//script.src = "file1.js";
document.getElementsByTagName("head")[0].appendChild(script);
