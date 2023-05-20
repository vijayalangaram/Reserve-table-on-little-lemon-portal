export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>RESERVE TABLE</h1>
                <h2>INDIA</h2>
                <p className="about-subtext">RESERVE TABLE opened in 2023</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}