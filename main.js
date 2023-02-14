const form = document.getElementById('form-agenda');
let linhas = '';
const telefones = [];

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaContato();
    atualizaAgenda();
})

function adicionaContato(){    
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('tel-contato');

    if(telefones.includes(inputTelContato.value)){
        alert(`Atenção: O número de telefone ${inputTelContato.value} já existe!`)
    } else {
        telefones.push(inputTelContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }
    inputNomeContato.value = '';
    inputTelContato.value = '';
}

function atualizaAgenda(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

