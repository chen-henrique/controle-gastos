const descricao = document.querySelector('#descricao')
const valor = document.querySelector('#valor')
const data = document.querySelector('#data')
const tipo = document.querySelector('#tipo')
const categoria = document.querySelector('#categoria')
const listaTransacoes = document.querySelector('#lista-transacoes')

const transacoes = []

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

    transacoes.push(transacao)

const tr = document.createElement('tr')
const tdDescricao = document.createElement('td')

tdDescricao.textContent = transacao.descricao
tr.appendChild(tdDescricao)
listaTransacoes.appendChild(tr)

    console.log(transacoes);
});

