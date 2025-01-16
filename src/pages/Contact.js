import '../styles/Contact.css';

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const emailData = {
      email: formData.get('email'),
      phone: formData.get('phone'),
      method: formData.getAll('method'),
      services: formData.getAll('services'),
      description: formData.get('description')
    };
    console.log('Email Sent:', emailData); // Replace with EmailJS integration
  };

  return (
    <main id="contact">
      <section className="hero">
        <h1>Contact Us</h1>
      </section>
      <section>
        <h2>Get a Quote</h2>
        <form onSubmit={sendEmail}>
          <label>Email Address:
            <input type="email" name="email" required />
          </label>
          <label>Phone Number:
            <input type="tel" name="phone" required />
          </label>
          <label>Preferred Contact Method:
            <input type="checkbox" name="method" value="phone" /> Phone
            <input type="checkbox" name="method" value="email" /> Email
          </label>
          <label>Services:
            <select multiple name="services">
              <option value="landscaping">Landscaping</option>
              <option value="construction">Construction</option>
            </select>
          </label>
          <label>Project Description:
            <textarea name="description" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
