import { useParams } from "react-router";
import "./shop.css";

import shoe from "../assets/products/shoe.jpg";
import bag from "../assets/products/bag.webp";
import phone from "../assets/products/phone.png";
import apple from "../assets/products/apple.avif";
import sofa from "../assets/products/sofa.jpg";
import lamp from "../assets/products/lamp.jpg";


function Shop() {

    const { category } = useParams();

    const products = [
        {
            id: 1,
            image: shoe,
            name: "Running Shoes",
            description: "Comfortable and stylish shoes for everyday activities.",
            price: "$50",
            category: "fashion"
        },

        {
            id: 2,
            image: bag,
            name: "Leather Bag",
            description: "A modern and elegant bag suitable for daily use.",
            price: "$35",
            category: "accessories"
        },

        {
            id: 3,
            image: phone,
            name: "Smart Phone",
            description: "A powerful smartphone with great performance.",
            price: "$300",
            category: "electronics"
        },

        {
            id: 4,
            image: apple,
            name: "Fresh Apples",
            description: "Fresh and healthy fruits selected for quality.",
            price: "$5",
            category: "fruits"
        },

        {
            id: 5,
            image: sofa,
            name: "Comfort Sofa",
            description: "Beautiful home furniture designed for comfort.",
            price: "$450",
            category: "home"
        },

        {
            id: 6,
            image: lamp,
            name: "Table Lamp",
            description: "A stylish lamp to brighten your home space.",
            price: "$40",
            category: "home"
        }
    ];
    const filteredProducts = category ? products.filter((product) => product.category === category ): products;

    return (
        <div className="page-container">

            <section className="shop-page">

                <h1>
                    {category ? category.charAt(0).toUpperCase() + category.slice(1) : "Shop"}
                </h1>

                <div className="shop-grid">

                    {filteredProducts.map((product) => (

                        <div className="product-card" key={product.id}>

                            <img src={product.image} alt={product.name} />
                            <h3> {product.name} </h3>
                            <p> {product.description} </p>

                            <div className="product-footer">
                                <span> {product.price} </span>

                                <button> Add to Cart </button>

                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                     <p className="no-products">No products found in this category.
                     </p>
                )}

            </section>
        </div>
    );
}
export default Shop;