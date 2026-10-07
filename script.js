const descricao = document.querySelector('#descricao')
const valor = document.querySelector('#valor')
const data = document.querySelector('#data')
const tipo = document.querySelector('#tipo')
const categoria = document.querySelector('#categoria')

const form = document.querySelector('#form');
form.addEventListener('submit', function(event) {
    event.preventDefault()
    const transacao = {
        descricao: descricao.value,
        valor: parseFloat(valor.value),
        data: data.value,
        tipo: tipo.value,
        categoria: categoria.value
    }

    console.log(transacao);
});

