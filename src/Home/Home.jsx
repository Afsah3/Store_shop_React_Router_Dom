import { Link } from "react-router";
import "./Home.css";

function Home() {
    return (
        <div className="page-container">
            <section className="home-page">
                <div className="hero">
                    <h1>Welcome to StoreShop</h1>
                    <p>
                        Discover quality products at affordable prices.
                    </p>

                    <Link to="/shop">
                        <button className="shop-btn">Shop Now</button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;