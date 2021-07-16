/*Função que sorteia 1 número aleatório de 1-9*/
const sorteador = ()  => Math.floor(Math.random() * 3 + 1 );

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
    let condicoesDeVitoria = ['111','222','333','444','555','666','777','888','999']

    for(let condicao = 0; condicao< condicoesDeVitoria.length; condicao++){
        if(resultado === condicoesDeVitoria[condicao]){
            console.log('Você ganhou')
        } 
        else{
            console.log('Você perdeu')
        }
               
    } 
    return resultado
}

analyser(oneTurn());