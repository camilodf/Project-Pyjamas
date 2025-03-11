const products = [
    { id: 1, name: "Pijama Barbie", price: 45.90, image: "Products/Pijamas/Pij-Barbie-Pink.jpeg" },
    { id: 2, name: "Pijama Ancora", price: 45.90, image: "Products/Pijamas/Pij-Anchor-Blue.jpeg" },
    { id: 3, name: "Pijama Pernalonga", price: 45.90, image: "Products/Pijamas/Pij-BugsBunny-Blue.jpeg" },
    { id: 4, name: "Pijama Olhos", price: 45.90, image: "Products/Pijamas/Pij-CloseEyes-Grey.jpeg" },
    { id: 5, name: "Pijama Vaquinha", price: 45.90, image: "Products/Pijamas/Pij-Cow-Black.jpeg" },
    { id: 6, name: "Pijama Flamingo", price: 45.90, image: "Products/Pijamas/Pij-Flemish-Blue.jpeg" },
    { id: 7, name: "Pijama Girafa", price: 45.90, image: "Products/Pijamas/Pij-Giraffe-Blue.jpeg" },
    { id: 8, name: "Pijama Panda", price: 45.90, image: "Products/Pijamas/Pij-Panda-Pink.jpeg" },
    { id: 9, name: "Pijama Melancia", price: 45.90, image: "Products/Pijamas/Pij-WMelon-Grey.jpeg" },
    { id: 10, name: "Pijama Mulher Maravilha", price: 45.90, image: "Products/Pijamas/Pij-WonderWoman-Red.jpeg" },
    { id: 11, name: "Pijama Preto", price: 55.90, image: "Products/Pijamas/Pij-Black.jpeg" },
    { id: 12, name: "Pijama Vermelho", price: 55.90, image: "Products/Pijamas/Pij-Red.jpeg" },
    { id: 13, name: "Pijama Lilás", price: 55.90, image: "Products/Pijamas/Pij-Purple.jpeg" },
];

function loadProducts() {
    const productContainer = document.getElementById("products");
    products.forEach(product => {
        productContainer.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}" onclick="openModal('${product.image}')">
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

// Função para abrir o modal com a imagem ampliada
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    
    modal.style.display = "flex";
    modalImage.src = imageSrc;
}

// Fechar o modal ao clicar no botão de fechar
document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("imageModal").style.display = "none";
});

// Fechar o modal ao clicar fora da imagem
document.getElementById("imageModal").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});

loadProducts();
