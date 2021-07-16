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
let valor = "";
function analyser(resultado){
    let condicoesDeVitoria = ['111','222','333','444','555']
    let vitoria = false;
    

    for(let condicao = 0; condicao< condicoesDeVitoria.length; condicao++){
        if(condicoesDeVitoria[condicao] === resultado ){
            vitoria = true;
            console.log(resultado) 
            const mostrarResultado = document.getElementById("resultado");
            let texto = document.createElement("p")
            texto.textContent = ('Você ganhou ')
            mostrarResultado.appendChild(texto)
              
        }               
    } 

    if(!vitoria){
        console.log(resultado)
        const mostrarResultado = document.getElementById("resultado");
            let texto = document.createElement("p")
            texto.classList.add("resposta")
            texto.textContent = ('Você perdeu ')
            mostrarResultado.appendChild(texto) 
           
           
    }
    
    valor = resultado
    return valor
}



 /*DOM*/

 const result = () =>{
    const mostrarResultado = document.getElementById("resultado");
    let texto = document.createElement("p")
    texto.classList.add("resposta")
    texto.textContent = (valor)
    mostrarResultado.appendChild(texto)  

}

const esconder = () => {
    let esconderResultado = document.getElementById("resultado")
    esconderResultado.textContent = ("");
}


const buttonJogar = document.getElementById('jogar');
buttonJogar.addEventListener('click', function(){
    analyser(oneTurn());
    result();    
})

const buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click', function(){
    
    esconder();
})


