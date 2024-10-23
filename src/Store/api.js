// Store/api.js

export const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data; // Extract the 'products' array
};

// Store/api.js

export const fetchCart = async () => {
    const response = await fetch("https://fakestoreapi.com/carts");
    if (!response.ok) {
        throw new Error("Failed to fetch cart");
    }
    const data = await response.json();
    return data.map((cartItem) => ({
        id: cartItem.id,
        products: cartItem.products, // Assuming each cart item has a 'products' array
    }))[0].products; // Return the products from the first cart (adjust if necessary)
};
