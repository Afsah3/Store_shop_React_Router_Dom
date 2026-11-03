import "./Contact.css";

function Contact() {
    return (
        <div className="page-container">
            <section className="contact-page">
                <h1>Contact Us</h1>

                <p>
                    We'd love to hear from you! Send us a message and we'll get
                    back to you as soon as possible.
                </p>

                <form className="contact-form">
                    <input
                        type="text"
                        placeholder="Your Name"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                    />

                    <input
                        type="text"
                        placeholder="Subject"
                    />

                    <textarea
                        rows="6"
                        placeholder="Your Message"
                    ></textarea>

                    <button type="submit">
                        Send Message
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Contact;