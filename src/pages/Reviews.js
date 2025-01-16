import '../styles/Reviews.css';
import React, { useState } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'John Doe', review: 'Great service!', stars: 5 },
    { id: 2, name: 'Jane Smith', review: 'Amazing team!', stars: 4 }
  ]);

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <main id="reviews">
      <section className="hero">
        <h1>Customer Reviews</h1>
      </section>
      <section>
        <h2>What Our Customers Say</h2>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.name}</strong>: {review.review} - {review.stars} Stars
            </li>
          ))}
        </ul>
        <h2>Leave a Review</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const newReview = {
            id: reviews.length + 1,
            name: formData.get('name'),
            review: formData.get('review'),
            stars: parseInt(formData.get('stars'))
          };
          addReview(newReview);
        }}>
          <label>Name: <input type="text" name="name" required /></label>
          <label>Review: <textarea name="review" required /></label>
          <label>Stars: <input type="number" name="stars" min="1" max="5" required /></label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
