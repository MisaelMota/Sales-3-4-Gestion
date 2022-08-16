const contador=document.getElementById("count");
const sumar=document.getElementById("incr");
const reiniciar=document.getElementById("reset");

let numero=0;
sumar.addEventListener("click",()=>{
    numero++;
    contador.innerHTML=numero;
}
);

reiniciar.addEventListener("click",()=>{
    numero=0;
    contador.innerHTML=numero;
}
);