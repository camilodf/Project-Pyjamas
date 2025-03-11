const products = [
    { id: 1, name: "Pijama Minnie Rosa", price: 35.90, image: "Products/Pijamas/Pij-Minnie-Pink.jpeg" },
    { id: 2, name: "Pijama Stitch Rosa", price: 35.90, image: "Products/Pijamas/Pij-Stitch-Pink.jpeg" },
    { id: 3, name: "Pijama Stitch Vermelho", price: 35.90, image: "Products/Pijamas/Pij-Stitch-Red.jpeg" },
];

function loadProducts() {
    const productContainer = document.getElementById("products");
    products.forEach(product => {
        productContainer.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>R$ ${product.price.toFixed(2)}</p>
                </div>
                <input type="number" id="qty-${product.id}" min="0" value="0">
            </div>
        `;
    });
}

function sendOrder() {
    let orderText = "Olá, gostaria de comprar:\n";
    let hasOrder = false;
    products.forEach(product => {
        const qty = document.getElementById(`qty-${product.id}`).value;
        if (qty > 0) {
            hasOrder = true;
            orderText += `\n${qty}x ${product.name} - R$ ${(product.price * qty).toFixed(2)}`;
        }
    });
    
    if (!hasOrder) {
        alert("Selecione pelo menos um produto antes de finalizar o pedido!");
        return;
    }
    
    const whatsappLink = `https://wa.me/27998979901?text=${encodeURIComponent(orderText)}`;
    window.open(whatsappLink, "_blank");
}

loadProducts();
