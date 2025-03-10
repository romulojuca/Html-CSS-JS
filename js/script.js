const nome = "Mario";
let animal = {nome:"Pantera", idade:3};
let idade = 16;
let teste = true;
let listaDesejos = ["Carro","Apartamento","Viagem"];
idade = idade + 1;


let paragrafo = document.querySelector("#paragrafo1");
paragrafo.addEventListener("click", trocaTexto);/*para receber um evento esse é se clicar*/
paragrafo.addEventListener("mouseover", mudaVerde);/*para receber um evento esse é se clicar*/
paragrafo.addEventListener("mouseout", mudaVermelho);/*para receber um evento esse é se clicar*/

function trocaTexto(){
    paragrafo.innerHTML="30 Ovos por 30 reais";
}
function mudaVerde(){
    paragrafo.innerHTML="Tire o mouse daqui"
}
function mudaVermelho(){
    paragrafo.innerHTML="coloque o mouse aqui";
}
/* nao consegui usar o paragrafo.style.background*/


console.log(nome);
console.log("ola " +nome +" voce tem " + idade + " anos.");
console.log(`Olá ${nome} voce está com ${idade} anos`);

if(idade >= 18){
    console.log("Bem Vindo");}
else{
    console.log("Acesso Restrito");
}
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof idade);
console.log(typeof teste);
console.log(animal["nome"]);
console.log(animal.nome);
console.log(listaDesejos[0]);
console.log(listaDesejos[1]);
console.log(listaDesejos[2]);
console.log(listaDesejos);
