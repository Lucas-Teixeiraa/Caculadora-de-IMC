const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

function Imc(){
    
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    if(nome !== '' && altura !== '' && peso !== ''){
        
        const valorIMC= (peso/(altura*altura)).toFixed(2);
        let classificacao='';

        if(valorIMC<18.5){
            classificacao='Você está abaixo do peso.';
        }else if(valorIMC>18.5 && valorIMC<24.9){
            classificacao='Você está com Peso ideal, Parabens!';
        }else if(valorIMC >25 && valorIMC<29.9){
            classificacao='Você está com Obesidade GRAU 1!';
        }else if(valorIMC>30 && valorIMC<39.9){
            classificacao='Você está com Obesidade GRAU 2!';
        }else if(valorIMC>40){
            classificacao='Você está com Obesidade Grau 3(Morbida)!!!!';
        }
        resultado.textContent=`${nome} seu IMC é ${valorIMC}, sendo assim ${classificacao}`;
    }
    else{
        resultado.textContent = 'Por Favor preencha todos os campos!';
        
    }

}

calcular.addEventListener('click', Imc);