//Criar a função para coletar
function Coletar(){
    let input = document.querySelector('.input-cep').value
    // Teste console.log(input)
    Dados(input)
}
async function Dados(input){
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response => response.json())
    console.log(dados)
    ExibirDados(dados)
}
function ExibirDados(dados){
    document.querySelector('.estado').value = dados.uf
    document.querySelector('.cidade').value = dados.localidade
    document.querySelector('.endereco').value = dados.logradouro
    document.querySelector('.ddd').value = dados.ddd
    limparDados(estado, cidade, endereco, ddd)
}
function limparDados(estado, cidade, endereco, ddd){
    document.querySelector('input').value = '';
    document.querySelector('.estado').value = '';
    document.querySelector('.cidade').value = '';
    document.querySelector('.endereco').value = '';
    document.querySelector('.ddd').value = '';
}