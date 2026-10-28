(function(){
var b=document.querySelector(".menubtn"),m=document.getElementById("mobilemenu");
function closeMenu(){if(m){m.classList.remove("open");}if(b){b.setAttribute("aria-expanded","false");b.setAttribute("aria-label","Open menu");b.innerHTML="&#9776;";}}
if(b&&m){b.addEventListener("click",function(){var o=m.classList.toggle("open");b.setAttribute("aria-expanded",o?"true":"false");b.setAttribute("aria-label",o?"Close menu":"Open menu");b.innerHTML=o?"&#10005;":"&#9776;";});}
var drops=document.querySelectorAll(".has-drop>button");
for(var i=0;i<drops.length;i++){drops[i].addEventListener("click",function(e){var li=this.parentNode;var o=li.classList.toggle("open");this.setAttribute("aria-expanded",o?"true":"false");e.stopPropagation();});}
document.addEventListener("click",function(){var ds=document.querySelectorAll(".has-drop.open");for(var j=0;j<ds.length;j++){ds[j].classList.remove("open");ds[j].firstChild.setAttribute("aria-expanded","false");}});
document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeMenu();}});
var mq=window.matchMedia("(min-width: 901px)");
function onChange(e){if(e.matches){closeMenu();}}
if(mq.addEventListener){mq.addEventListener("change",onChange);}else if(mq.addListener){mq.addListener(onChange);}
})();
