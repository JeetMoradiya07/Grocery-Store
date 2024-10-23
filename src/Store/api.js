// Store/api.js

export const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
};

// Fetch products by ID
export const fetchProductById = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch product details");
    }
    const data = await response.json();
    return data;
};

export const fetchCart = async () => {
    const response = await fetch("https://fakestoreapi.com/carts");
    if (!response.ok) {
        throw new Error("Failed to fetch cart");
    }
    const data = await response.json();
    return data.map((cartItem) => ({
        id: cartItem.id,
        products: cartItem.products,
    }))[0].products;
};
