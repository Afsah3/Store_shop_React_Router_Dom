import "./About.css";

function About() {
    return (
        <div className="page-container">
            <section className="about-page">
                <h1>About Us</h1>

                <p>
                    Welcome to <strong>StoreShop</strong>, your trusted online
                    shopping destination. We offer high-quality products at
                    affordable prices with fast and reliable delivery.
                </p>

                <p>
                    Our mission is to provide customers with an easy, secure,
                    and enjoyable shopping experience. Whether you're looking
                    for fashion, electronics, or home essentials, we've got you
                    covered.
                </p>

                <div className="about-cards">
                    <div className="about-card">
                        <h3>Our Mission</h3>
                        <p>
                            To make online shopping simple, affordable, and
                            convenient for everyone.
                        </p>
                    </div>

                    <div className="about-card">
                        <h3>Our Vision</h3>
                        <p>
                            To become one of the most trusted online stores by
                            delivering quality products and excellent service.
                        </p>
                    </div>

                    <div className="about-card">
                        <h3>Why Choose Us?</h3>
                        <p>
                            Quality products, secure payments, fast shipping,
                            and customer satisfaction are our priorities.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;