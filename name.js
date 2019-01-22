var btn= document.createElement("textarea");
var t=document.createTextNode("igor");
btn.appendChild(t);
document.body.appendChild(btn);
var prom=prompt('digite seu nome','Usuario1');

var name=document.getElementById("label").innerHTML='Ola '+prom+', seja muito bem vindo';



console.log(name);