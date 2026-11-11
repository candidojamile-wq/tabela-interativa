let productId = 1001;

document.getElementById('productForm').addEventListener('submit' , function(e){
    e.preventDefault();

    //Captura dos valores
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const priceValue = parseFloat(document.getElementById('price').value);
    const qty= parseInt(document.getElementById('qty').value);

    //Formatação: transforma o número em moeda brasileira R$
    const priceFormatted = priceValue.toLocaleString('pt-BR' , {minimumFracttionDigits: 2});

    //Logica de status:

    let statusLabel, statusClass;

    if(qty === 0){
        statusLabel = "Esgotado";
        statusClass = "Esgotado";
    }else if (qty <= 5){
        statusLabel = "Baixo Estoque";
        statusClass = "baixo-estoque";
    }else{
        statusLabel = "Em Estoque";
        statusClass = "em-estoque";
    }

    //criação da linha: faz a linha de tabela

    const tableBody = document.querySelector('#productsTable tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
    <td data-label="ID">#${productId++}</td>
    <td data-label="Produto">${name}</td>
    <td data-label="Categoria">${category}</td>
    <td data-label="Preço" class="price">R${priceFormatted}</td>
    <td data-label="Qtd.">${qty}</td>
    <td data-label="Status"><span class"status ${statusClass}">${statusLabel}</span></td>
    `;

    //Inserção: Adiciona a nova linha da tabela

    tableBody.appendChild(newRow);

    //Limpeza: Reseta os campos do formulário para o próximo cadastro
    this.reset();
});