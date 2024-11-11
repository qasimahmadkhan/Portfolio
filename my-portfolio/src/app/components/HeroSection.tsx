import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                    Elias is a <span className="highlight">web designer</span> and <span className="highlight">front-end developer</span>
                </h1>
                <p className="hero-description">
                    He crafts responsive websites where technologies meet creativity.
                </p>
                <button className="hero-button">Contact me!</button>
            </div>
            <div className="hero-image-wrapper">
                <Image
                    src="/Image.png"
                    alt="My Image"
                    width={500}
                    height={400}
                />
                <div className="tagline">
                    <div className="statusIcon"></div>
                    <div className="status">Currently working on portfolio</div>
                </div>
            </div>
        </section>
    );
}