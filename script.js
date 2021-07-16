/*Função que sorteia 1 número aleatório de 1-4*/
const sorteador = ()  => Math.floor(Math.random() * 5 + 1 );

/*Função que simula uma rodada*/
function oneTurn(){
    let resultado = [];
    for(let i = 0; i < 3; i++){
        resultado += (sorteador())
    }
       return resultado
}

/*Função que compara o resultado*/
function analyser(resultado){
    let condicoesDeVitoria = ['111','222','333','444','555']
    let vitoria = false;

    for(let condicao = 0; condicao< condicoesDeVitoria.length; condicao++){
        if(condicoesDeVitoria[condicao] === resultado ){
            vitoria = true;
            console.log('Você GANHOUUUUU ' + resultado)
        }               
    } 

    if(!vitoria){
        console.log('Você perdeu ' +resultado)
    }
    
    return resultado
}

analyser(oneTurn());

const buttonJogar = document.getElementById('jogar');
buttonJogar.addEventListener('click', function(){
    analyser(oneTurn());
})