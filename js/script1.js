let botao1 = document.querySelector("#botao1");//#para id  .paraclass
botao1.style.backgroundColor="blue";
let estaQuebrado=false;
let cont=0;

/*
botao1.addEventListener("click", quebrei)
botao1.addEventListener("mouseover", mudaverde)
botao1.addEventListener("mouseout", mudaazul)


function quebrei(){
    botao1.style.backgroundColor="red";
    botao1.innerHTML="queBREI";
}
function mudaverde(){
    botao1.style.backgroundColor="green";
}
function mudaazul(){
    botao1.style.backgroundColor="blue";
}*/

botao1.addEventListener("mouseover",e =>{
    if (estaQuebrado===false)
        botao1.style.backgroundColor="green";

});
botao1.addEventListener("mouseout",e =>{
    if (estaQuebrado===false)
        botao1.style.backgroundColor="blue"
});
botao1.addEventListener("click",e =>{
    cont=cont+1;//ou usar cont++;
    if(cont>=10){
        botao1.style.backgroundColor="red";
        botao1.innerHTML="QUEBREI";
        estaQuebrado=true;
    }
});
