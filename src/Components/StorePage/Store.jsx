// Store/Store.jsx
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import styles from "./Store.module.scss";
import Item from "./Item";
import {NavLink} from "react-router-dom";
import PriceSlider from "./PriceSlider";
import Search from "../UI/Search";
import {fetchProducts} from "../../Store/api.js";

export default function Store() {
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [sortOption, setSortOption] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    // Fetch products using react-query
    const {
        data: products = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["products"], // Unique key for the query
        queryFn: fetchProducts, // The function that fetches the data
    });

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading products</div>;

    // Filter products by search, price range, and sorting options
    let filteredProducts = products.filter((product) => {
        const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
        const matchesSearch = product.title.toLowerCase().includes(searchQuery);
        return inPriceRange && matchesSearch;
    });

    // Sort logic
    switch (sortOption) {
        case "newest":
            filteredProducts = filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case "lowToHigh":
            filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case "highToLow":
            filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case "aToZ":
            filteredProducts = filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case "zToA":
            filteredProducts = filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
            break;
        default:
            break;
    }

    return (
        <div className={styles.Store}>
            <div className={styles.sideBar}>
                <div className={styles.sortData}>
                    <h2>Sort By</h2>
                    <select value={sortOption} onChange={handleSortChange}>
                        <option value="newest">Newest</option>
                        <option value="lowToHigh">Price: Low to High</option>
                        <option value="highToLow">Price: High to Low</option>
                        <option value="aToZ">Title: A-Z</option>
                        <option value="zToA">Title: Z-A</option>
                    </select>
                </div>

                <div className={styles.price}>
                    <h2>Filter By</h2>
                    <PriceSlider value={priceRange} handleChange={handlePriceChange} />
                </div>
            </div>

            <div className={styles.products}>
                <div className={styles.search}>
                    <Search onChange={handleSearchChange} /> {/* Pass the handleSearchChange function */}
                </div>
                <div className={styles.heading}>
                    <h1>All Products</h1>
                    <h2>{filteredProducts.length} products</h2> {/* Display the count of filtered products */}
                </div>
                <div className={styles.productItems}>
                    {filteredProducts.map((product) => (
                        <div className={styles.item} key={product.id}>
                            <NavLink to={`/product/${product.id}`}>
                                <Item name={product.title} price={product.price} image={product.image} />
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
