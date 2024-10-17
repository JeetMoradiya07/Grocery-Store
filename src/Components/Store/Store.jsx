import {useState, useEffect} from "react";
import styles from "./Store.module.scss";
import Item from "./Item";
import {NavLink} from "react-router-dom";
import PriceSlider from "./PriceSlider";
import Search from "../UI/Search";

export default function Store() {
    const [products, setProducts] = useState([]); // State to hold API data
    const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products
    const [priceRange, setPriceRange] = useState([0, 1000]); // Default price range [min, max]
    const [maxPrice, setMaxPrice] = useState(1000); // Max price state
    const [sortOption, setSortOption] = useState(""); // Sort option state
    const [searchQuery, setSearchQuery] = useState(""); // State to hold search query

    // Handle price range change
    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    // Handle sort option change
    const handleSortChange = (event) => {
        setSortOption(event.target.value); // Update sort option
    };

    // Handle search query change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase()); // Update search query
    };

    // Fetch product data from API
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data); // Set the fetched data to state
                setFilteredProducts(data); // Initially set filteredProducts to all products

                // Calculate max price and update state
                const max = Math.round(Math.max(...data.map((product) => product.price)));
                setMaxPrice(max);
                setPriceRange([0, max]); // Set initial price range [0, max]
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    // Filter and sort products based on price range, sorting option, and search query
    useEffect(() => {
        let filtered = products.filter((product) => {
            // Filter based on price range
            const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
            // Filter based on search query
            const matchesSearch = product.title.toLowerCase().includes(searchQuery);
            return inPriceRange && matchesSearch; // Return true if both conditions are met
        });

        // Sort products based on the selected sort option
        switch (sortOption) {
            case "newest":
                filtered = [...filtered].sort((a, b) => b.id - a.id); // Assuming ID represents newest products
                break;
            case "lowToHigh":
                filtered = [...filtered].sort((a, b) => a.price - b.price);
                break;
            case "highToLow":
                filtered = [...filtered].sort((a, b) => b.price - a.price);
                break;
            case "aToZ":
                filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "zToA":
                filtered = [...filtered].sort((a, b) => b.title.localeCompare(a.title));
                break;
            default:
                break;
        }

        setFilteredProducts(filtered); // Update filtered products
    }, [priceRange, products, sortOption, searchQuery]); // Add searchQuery as a dependency

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
                    <PriceSlider value={priceRange} max={maxPrice} handleChange={handlePriceChange} />
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
