var clock=document.querySelector(".clock"),tick=function(){var n=new Date,t=String(n.getHours()).padStart(2,"0"),a=String(n.getMinutes()).padStart(2,"0"),c=String(n.getSeconds()).padStart(2,"0"),e=dateFns.format(n,"eeee, do MMMM yyyy"),o="\n    <p>".concat(e,"</p>\n    <div>\n      <span>").concat(t,"</span> :\n      <span>").concat(a,"</span> :\n      <span>").concat(c,"</span>\n    </div>\n  ");clock.innerHTML=o};setInterval(tick,1e3);
//# sourceMappingURL=index.cc69a169.js.map