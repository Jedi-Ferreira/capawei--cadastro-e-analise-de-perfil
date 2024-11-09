document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Enviar para o servidor
    fetch('/api/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email })
    })
    .then(response => response.json())
    .then(data => {
        const clienteLista = document.getElementById('clienteLista');
        clienteLista.innerHTML += `<li>${data.nome} - ${data.email}</li>`;
        document.getElementById('clienteForm').reset();
    });
});

document.getElementById('produtoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const produto = document.getElementById('produto').value;
    const quantidade = document.getElementById('quantidade').value;

    // Enviar para o servidor
    fetch('/api/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ produto, quantidade })
    })
    .then(response => response.json())
    .then(data => {
        const produtoLista = document.getElementById('produtoLista');
        produtoLista.innerHTML += `<li>${data.produto} - ${data.quantidade}</li>`;
        document.getElementById('produtoForm').reset();
    });
});
