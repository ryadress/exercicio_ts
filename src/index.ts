function multiplicar(a:number, b:number):number {
    return a * b;
}

function saudacao(nome:string):string{
    return`olá ${nome}`;
}

const resultadoMultiplicacao = multiplicar(5, 3);
const mensagemSaudacao = saudacao("Ryan");

console.log(`Resultado da multiplcação: ${resultadoMultiplicacao}`);
console.log(`mensagemSaudacao`);