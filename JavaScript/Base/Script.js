function Boasvindas() {
    let nome;
    let sobrenome;

    nome = prompt("Digite o seu nome", "Digite aqui");

    sobrenome = prompt("Digite o seu sobrenome", "Digite aqui");

    alert("Olá " + nome + " " + sobrenome);
}

function Somar() {

    let first;
    let second;
    let result

    first = prompt("Digite o primeiro número");
    second = prompt("Digite o segundo número");
    result = parseInt(first) + parseInt(second);
    alert("A soma é de " + result);
}

function Sub() {

    let first;
    let second;
    let result

    first = prompt("Digite o primeiro número");
    second = prompt("Digite o segundo número");
    result = parseInt(first) - parseInt(second);
    alert("A subtração é de " + result);
}

function Mult() {

    let first;
    let second;
    let result

    first = prompt("Digite o primeiro número");
    second = prompt("Digite o segundo número");
    result = parseInt(first) * parseInt(second);
    alert("A mulplicação é de " + result);
}

function Div() {

    let first;
    let second;
    let result
    if (second != 0) {
        first = prompt("Digite o primeiro número");
        second = prompt("Digite o segundo número");
        result = parseInt(first) / parseInt(second);
        alert("A divisão é de " + result);
    } else (alert("Não é possivel"))


}
