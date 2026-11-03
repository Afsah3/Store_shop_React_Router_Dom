import { Link } from "react-router";
import "./Categories.css";

function Categories() {

    const categories = [
        {
            name: "Electronics",
            path: "electronics"
        },
        {
            name: "Fashion",
            path: "fashion"
        },
        {
            name: "Fruits",
            path: "fruits"
        },
        {
            name: "Home",
            path: "home"
        },
        {
            name: "Accessories",
            path: "accessories"
        },
        {
            name: "Beauty",
            path: "beauty"
        }
    ];


    return (
        <div className="page-container">
            <section className="categories-page">

                <h1>Categories</h1>

                <div className="categories-grid">

                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            to={`/shop/${category.path}`}
                            className="category-card"
                        >
                            {category.name}
                        </Link>
                    ))}

                </div>

            </section>
        </div>
    );
}

export default Categories;