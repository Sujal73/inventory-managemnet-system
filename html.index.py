<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inventory and Sales Management System</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Inventory and Sales Management System</h1>
    <nav>
        <ul>
            <li><a href="#admin">Admin</a></li>
            <li><a href="#user">User</a></li>
        </ul>
    </nav>
    <section id="admin">
        <h2>Admin Functions</h2>
        <button onclick="getProducts()">View Products</button>
        <button onclick="addProduct()">Add Product</button>
        <button onclick="updateProduct()">Update Product</button>
        <button onclick="deleteProduct()">Delete Product</button>
        <button onclick="restockProduct()">Restock Product</button>
        <button onclick="applyDiscount()">Apply Discount</button>
        <button onclick="salesReport()">Sales Report</button>
        <button onclick="checkExpiredProducts()">Check Expired Products</button>
        <pre id="admin-output"></pre>
    </section>
    <section id="user">
        <h2>User Functions</h2>
        <button onclick="registerUser()">Register</button>
        <button onclick="loginUser()">Login</button>
        <button onclick="buyProduct()">Buy Product</button>
        <button onclick="viewPurchaseHistory()">View Purchase History</button>
        <button onclick="viewFavoriteProducts()">View Favorite Products</button>
        <button onclick="addFavoriteProduct()">Add Product to Favorites</button>
        <pre id="user-output"></pre>
    </section>
    <script src="scripts.js"></script>
</body>
</html>
