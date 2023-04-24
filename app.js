async function fetchProducts() {
    const response = await fetch("https://643d9cba6c30feced816a0fc.mockapi.io/v1/Shop");
    const products = await response.json();
    return products;
}

function sortProductsByPrice(products) {
    return products.sort((a, b) => a.price - b.price);
}

function createProductElement(product) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    
    productDiv.innerHTML = `
        <a href="product-details.html?id=${product.id}">
            <img src="${product.picture}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
            </div>
        </a>
    `;

    return productDiv;
}

async function displayProducts() {
    const products = await fetchProducts();
    const sortedProducts = sortProductsByPrice(products);
    const productsDiv = document.getElementById("products");

    for (const product of sortedProducts) {
        const productElement = createProductElement(product);
        productsDiv.appendChild(productElement);
    }
}

displayProducts();
