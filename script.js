let currentQty = 1;

// Altera a quantidade de galões/garrafas no formulário
function changeQty(amount) {
    currentQty += amount;
    if (currentQty < 1) currentQty = 1;
    document.getElementById('qtyVal').innerText = currentQty;
}

// Redireciona para o WhatsApp montando a mensagem personalizada
function sendWhatsAppMessage(event) {
    event.preventDefault();

    const name = document.getElementById('nameInput').value.trim();
    const product = document.getElementById('brandSelect').value;
    const address = document.getElementById('addressInput').value.trim();

    // Número oficial da MINADAGUA para receber os pedidos
    const phone = "5511988672080";

    if (!name || !address) {
        alert('Por favor, preencha seu nome e o endereço de entrega.');
        return;
    }

    const message = `Olá, MINADAGUA! Gostaria de fazer um pedido pelo site:%0A%0A` +
                    `*Nome:* ${encodeURIComponent(name)}%0A` +
                    `*Produto:* ${encodeURIComponent(product)}%0A` +
                    `*Quantidade:* ${currentQty}%0A` +
                    `*Endereço:* ${encodeURIComponent(address)}%0A%0A` +
                    `Aguardo a confirmação!`;

    const waUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(waUrl, '_blank');
}