// let title = document.querySelector("h1");
// title.innerHTML = "Jogo do número secreto!";

// let paragraph = document.querySelector("p");
// paragraph.innerHTML = "Escolha um número entre 1 e 1O:";
let listSortedNumbers = [];
let limitNumber = 10;
let numberGenerator = aleatoryNumber();
let attempts = 1;

// Exibi algo na tela com paramentros
function showTextInScreen(tag, text) {
let element = document.querySelector(tag);
element.innerHTML = text;
//Link - https://responsivevoice.org/
responsiveVoice.speak(text, "Brazilian Portuguese Female", {rate: 1});
}

//Caso precise mudar algo, com uma func fica mais facil, isso é uma boa pratica!
function messageInitial() {
  showTextInScreen("h1", "Jogo do número secreto");
  showTextInScreen("p", "Escolha um numero entre 1 e 10:");
}
//Precisa ser chamada fora, uma vez.
messageInitial();

//funcao simples
  function verificarChute(){
    //Se eu quiser pegar apenas o valor do input uso value.
    let kick = document.querySelector("input").value;

if (kick == numberGenerator) {
   showTextInScreen("h1", "Acertou!");
   let wordAttempt = attempts > 1 ? "tentativas" : "tentativa";
   let menssageAttemps = attempts = `Você acertou o número secreto com ${attempts} ${wordAttempt}.`;
   showTextInScreen("p", menssageAttemps);
   //Pegando pelo ID
   document.getElementById("reiniciar").removeAttribute("disabled");

} else  {
    if  (kick > numberGenerator){
    showTextInScreen("p", "O número secreto é menor.");
} else {
       showTextInScreen("p", "O número secreto é maior.");
      }
      //Contar a quantidade de tentativas caso erramos
      attempts++;
      clearField();
    }
   
  }
  //Retorna um valor
function aleatoryNumber() {
 let chooseNumbers = parseInt(Math.random() * limitNumber + 1);
 let quantityElementsList = listSortedNumbers.length;

if (quantityElementsList == limitNumber ){
  listSortedNumbers = [];
}
 if (listSortedNumbers.includes(chooseNumbers)){
  //Fazendo um recursao, a funcao que chama ela mesmo.
  return aleatoryNumber();
 } else {
  //Adicionar o numero na lista - push
  listSortedNumbers.push(chooseNumbers);
console.log(listSortedNumbers);
  return chooseNumbers;
 }
}

function clearField(){
  kick = document.querySelector("input");
  kick.value = "";
}
function restartGame(){
  numberGenerator = aleatoryNumber();
  clearField();
  attempts = 1;
  messageInitial()
  //Disabilitar  o botao
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

