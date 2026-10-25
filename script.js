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

    const tdValor = document.createElement('td')
    tdValor.textContent = transacao.valor
    tr.appendChild(tdValor)
    listaTransacoes.appendChild(tr)

    const tdData = document.createElement('td')
    tdData.textContent = transacao.data
    tr.appendChild(tdData)
    listaTransacoes.appendChild(tr)

    const tdTipo = document.createElement('td')
    tdTipo.textContent = transacao.tipo
    tr.appendChild(tdTipo)
    listaTransacoes.appendChild(tr)

    const tdCategoria = document.createElement('td')
    tdCategoria.textContent = transacao.categoria
    tr.appendChild(tdCategoria)
    listaTransacoes.appendChild(tr)

    console.log(transacoes);
});

