import '../styles/Home.css';

export default function Home() {
  return (
    <main id="home">
      <section className="hero">
        <h1>Your Landscaping Company</h1>
      </section>
      <section className="about-us">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae massa dictum cursus.</p>
      </section>
      <section className="image-collage">
        <h2>Our Work</h2>
        <div className="collage">
          <img src="/public/assets/image1.jpg" alt="Landscaping 1" />
          <img src="/public/assets/image2.jpg" alt="Landscaping 2" />
          <img src="/public/assets/image3.jpg" alt="Landscaping 3" />
        </div>
      </section>
    </main>
  );
}
