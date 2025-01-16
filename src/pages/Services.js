import '../styles/Services.css';

export default function Services() {
  return (
    <main id="services">
      <section className="hero">
        <h1>Our Services</h1>
      </section>
      <section className="services-list">
        <h2>What We Offer</h2>
        <div className="grid">
          <div className="service">
            <img src="/public/assets/service1.jpg" alt="Service 1" />
            <p>Service 1 Description</p>
          </div>
          <div className="service">
            <img src="/public/assets/service2.jpg" alt="Service 2" />
            <p>Service 2 Description</p>
          </div>
        </div>
      </section>
    </main>
  );
}