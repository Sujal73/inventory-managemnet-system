function fetchData(url, method = 'GET', data = null) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    if (data) {
        options.body = JSON.stringify(data);
    }
    return fetch(url, options).then(response => response.json());
}

function displayOutput(elementId, data) {
    document.getElementById(elementId).textContent = JSON.stringify(data, null, 2);
}

// Admin Functions
function getProducts() {
    fetchData('/admin/products')
        .then(data => displayOutput('admin-output', data))
        .catch(error => console.error('Error:', error));
}

function addProduct() {
    const product = { id: '1', name: 'Product1', price: 100, quantity: 10, date: '31/12/2024' };
    fetchData('/admin/product', 'POST', product)
        .then(data => displayOutput('admin-output', data))
        .catch(error => console.error('Error:', error));
}

function updateProduct() {
    const productId = '1';
    const updatedProduct = { price: 90 };
    fetchData(`/admin/product/${productId}`, 'PUT', updatedProduct)
        .then(data => displayOutput('admin-output', data))
        .catch(error => console.error('Error:', error));
}

function deleteProduct() {
    const productId = '1';
    fetchData(`/admin/product/${productId}`, 'DELETE')
        .then(data => displayOutput('admin-output', data))
        .catch(error => console.error('Error:', error));
}

function restockProduct() {
    const productId = '1';
    const data = { quantity: 50 };
    fetchData(`/admin/product/restock/${productId}`, 'POST', data)
        .then(data => displayOutput('admin-output', data))
        .catch(error => console.error('Error:', error));
}

function applyDiscount() {
    const productId = '1';
    const data = { discount: 10 };
    fetchData(`/admin/product/discount/${productId}`, 'POST', data)
        .then(data => displayOutput('admin-output', data))
        .catch(error => console.error('Error:', error));
}

function salesReport() {
    const startDate = '01/08/2024';
    const endDate = '31/08/2024';
    fetchData(`/admin/sales-report?start_date=${startDate}&end_date=${endDate}`)
        .then(data => displayOutput('admin-output', data))
        .catch(error => console.error('Error:', error));
}

function checkExpiredProducts() {
    fetchData('/admin/expired-products')
        .then(data => displayOutput('admin-output', data))
        .catch(error => console.error('Error:', error));
}

// User Functions
function registerUser() {
    const user = { id: 'user1', password: 'password' };
    fetchData('/user/register', 'POST', user)
        .then(data => displayOutput('user-output', data))
        .catch(error => console.error('Error:', error));
}

function loginUser() {
    const user = { id: 'user1', password: 'password' };
    fetchData('/user/login', 'POST', user)
        .then(data => displayOutput('user-output', data))
        .catch(error => console.error('Error:', error));
}

function buyProduct() {
    const purchase = { user_id: 'user1', product_id: '1', quantity: 2 };
    fetchData('/user/purchase', 'POST', purchase)
        .then(data => displayOutput('user-output', data))
        .catch(error => console.error('Error:', error));
}

function viewPurchaseHistory() {
    const userId = 'user1';
    fetchData(`/user/purchases/${userId}`)
        .then(data => displayOutput('user-output', data))
        .catch(error => console.error('Error:', error));
}

function viewFavoriteProducts() {
    const userId = 'user1';
    fetchData(`/user/favorites/${userId}`)
        .then(data => displayOutput('user-output', data))
        .catch(error => console.error('Error:', error));
}

function addFavoriteProduct() {
    const userId = 'user1';
    const productId = '1';
    fetchData(`/user/favorites/${userId}`, 'POST', { product_id: productId })
        .then(data => displayOutput('user-output', data))
        .catch(error => console.error('Error:', error));
}
