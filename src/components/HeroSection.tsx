export default function HeroSection() {
    return (
        <section className="content-container" id="hero">
            <p className="hero--intro-text">Hello world! My name is</p>
            <h1>Sebastian Lee</h1>
            <p className="hero--description">
                <span>Software Engineer.</span> A driven individual interested in building high-quality products for the web.
            </p>
            <div className="hero--social-links">
                <a href="#" className="btn">
                    <img src="./assets/icons/icon-github.svg" alt="GitHub Icon" />
                    GitHub</a>
                <a href="#" className="btn">
                    <img src="./assets/icons/icon-email.svg" alt="Email Icon" />
                    Email</a>
                <a href="#" className="btn">
                    <img src="./assets/icons/icon-linkedin.svg" alt="LinkedIn Icon" />
                    LinkedIn</a>
            </div>
        </section>
    )
}