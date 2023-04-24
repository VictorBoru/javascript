async function addProduct(product) {
    const response = await fetch("https://643d9cba6c30feced816a0fc.mockapi.io/v1/Shop", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });
    const addedProduct = await response.json();
    return addedProduct;
}

function addProductForm() {
    const form = document.getElementById("add-product-form");
    if (!form) return;

    form.onsubmit = async (event) => {
        event.preventDefault();

        const product = {
            name: document.getElementById("name").value,
            price: parseFloat(document.getElementById("price").value),
            pictureUrl: document.getElementById("pictureUrl").value,
            productDescription: document.getElementById("productDescription").value,
            salesLocation: document.getElementById("salesLocation").value
        };

        const addedProduct = await addProduct(product);

        if (addedProduct && addedProduct.id) {
            form.reset();
            document.getElementById("success-message").style.display = "block";
        }
    };
}

addProductForm();
