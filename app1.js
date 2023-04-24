
async function fetchProduct(productId) {
    const response = await fetch(`https://643d9cba6c30feced816a0fc.mockapi.io/v1/Shop/${productId}`);
    const product = await response.json();
    return product;
}

async function displayProductDetails() {
    const productId = new URLSearchParams(window.location.search).get("id");
    if (!productId) return;

    const product = await fetchProduct(productId);
    const productDetailsDiv = document.getElementById("product-details");

    productDetailsDiv.innerHTML = `
        <img src="${product.picture}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Product Description: ${product.description}</p>
        <p>Price: $${product.price}</p>
        <p>Sales Location: ${product.location}</p>
    `;

    const deleteButton = document.getElementById("delete-product");
    deleteButton.onclick = async () => {
        await deleteProduct(productId);
        deleteButton.style.display = "none";
        productDetailsDiv.style.display = "none";
        document.getElementById("delete-notification").style.display = "block";
    };
}

displayProductDetails();

async function deleteProduct(productId) {
    await fetch(`https://643d9cba6c30feced816a0fc.mockapi.io/v1/Shop/${productId}`, {
        method: "DELETE"
    });
}
