const myModule=(()=>{"use strict";let a=document.querySelector("#btnPerSquare"),b=document.querySelector("#btnAreaSquare"),c=document.querySelector("#btnPerTriangle"),d=document.querySelector("#btnAreaTriangle"),e=document.querySelector("#btnDiamCircle"),f=document.querySelector("#btnPerCircle"),g=document.querySelector("#btnAreaCircle"),h=a=>4*a,i=a=>a*a;a.addEventListener("click",()=>{let a=`El perimetro del cuadrado es: ${h(Number(document.getElementById("inputSide").value))} cm.`;document.getElementById("result").innerText=a}),b.addEventListener("click",()=>{let a=`El \xe1rea del cuadrado es: ${i(Number(document.getElementById("inputSide").value))} cm\xb2.`;document.getElementById("result").innerText=a});let j=(a,b,c)=>a+b+c,k=(a,b)=>a*b;c.addEventListener("click",()=>{let a=Number(document.getElementById("inputSide1").value),b=document.getElementById("inputSide2"),c=Number(b.value),d=document.getElementById("inputSide3"),e=Number(d.value),f=`El perimetro del Triangulo es: ${j(a,c,e)} cm.`;document.getElementById("result").innerText=f}),d.addEventListener("click",()=>{let a=Number(document.getElementById("inputBaseT").value),b=document.getElementById("inputAltT"),c=Number(b.value),d=`El \xe1rea del Triangulo es: ${k(a,c)} cm\xb2.`;document.getElementById("result").innerText=d});let l=a=>6.28*a,m=a=>2*a,n=a=>3.14*a*a;f.addEventListener("click",()=>{let a=`El per\xedmetro del c\xedrculo es: ${l(Number(document.getElementById("inputRadio").value))} cm.`;document.getElementById("result").innerText=a}),e.addEventListener("click",()=>{let a=`El di\xe1metro del c\xedrculo es: ${m(Number(document.getElementById("inputRadio").value))} cm.`;document.getElementById("result").innerText=a}),g.addEventListener("click",()=>{let a=`El \xe1rea del c\xedrculo es: ${n(Number(document.getElementById("inputRadio").value))} cm\xb2.`;document.getElementById("result").innerText=a})})()