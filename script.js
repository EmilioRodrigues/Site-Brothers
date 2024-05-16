/* Variáveis - nome do espaço de memoria que vc reserva no qual vc vai 
guardar o que quiser dentro dela;

Quais os tipo de variaveis em JS?

VAR - jeito antigo (não se usa mais)

LET- mais usual e pode ser alterado ser alterado o valor posteriormente

CONST - menos usual e 'NÃO' pode ser alterado o valor posteriormente

*/
 /*
 Função - trecho de codigo que somente é executado quando é "CHAMADO".
*/
// const abacate = "Oi eu sou um abacate";
// const pera = "Oi eu sou uma pera";

// const numero1  = 100
// const numero2  = 200

// function soma(){
//     const somatoria = numero1 + numero2
//     console.log(somatoria)
// }

// console.log(pera)
// console.log(abacate)

 /*Chamando a função - o codigo é executado linha a linha e PULA quando chega na função imprimindo 
os valores das variaveis pera e abacate - quando a função eé CHAMADA ela joga na tela o valor de console.log(somatoria) mostrando o resultado da variavel armazenada DENTRO da função*/

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}


function esconderForm(){
    form.style.left = "-300%"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}







