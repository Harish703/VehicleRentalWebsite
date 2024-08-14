import React, { useState } from 'react';
import '../Css/ReviewPage.css';
import ronnie from '../Components/Assests1/ronnie.jpg';
import shah from '../Components/Assests1/shah.jpg';
import mb from '../Components/Assests1/maheshbabu.jpg';
import messi from '../Components/Assests1/lm10.jpg';
import suryia from '../Components/Assests1/surya.jpg';
import hrithik from '../Components/Assests1/hrithik.jpg';
import ajith from '../Components/Assests1/AK.jpg';
import kholi from '../Components/Assests1/VK.jpg';
import hitman from '../Components/Assests1/Rohit.jpg';
import msd from '../Components/Assests1/Dhoni.jpg';

const defaultReviews = [
  {
    name: 'Cristiano Ronaldo',
    rating: 5,
    comment: 'Excellent service! The car was clean and well-maintained.',
    tags: ['"Excellent Service', 'Clean Vehicle"'],
    image: ronnie,
  },
  {
    name: 'Shah Rukh Khan',
    rating: 5,
    comment: 'Highly recommend this rental service. Very professional.',
    tags: ['"Highly Recommend', 'Professional"'],
    image: shah,
  },
  {
    name: 'Mahesh Babu',
    rating: 5,
    comment: 'Great experience! User Friendly and smooth process.',
    tags: ['"Great Experience', 'User Friendly"'],
    image: mb,
  },
  {
    name: 'Lionel Messi',
    rating: 4,
    comment: 'Good value for the price. Will use again.',
    tags: ['"Good Value', 'Affordable"'],
    image: messi,
  },
  {
    name: 'Surya',
    rating: 5,
    comment: 'The car was almost new and the process was quick.',
    tags: ['"Almost New', 'Quick Process"'],
    image: suryia,
  },
  {
    name: 'Hrithik Roshan',
    rating: 4,
    comment: 'Satisfactory experience overall. Minor issues with the pickup.',
    tags: ['"Satisfactory', 'Minor Issues"'],
    image: hrithik,
  },
  {
    name: 'Ajith Kumar',
    rating: 5,
    comment: 'Fantastic experience! Everything was perfect.',
    tags: ['"Fantastic Experience', 'Perfect"'],
    image: ajith,
  },
  {
    name: 'Virat Kholi',
    rating: 5,
    comment: 'Great value for money and excellent customer service.',
    tags: ['"Great Value', 'Excellent Service"'],
    image: kholi,
  },
  {
    name: 'Rohit Sharma',
    rating: 4,
    comment: 'Very good experience. Car was in excellent condition.',
    tags: ['"Very Good', 'Excellent Condition"'],
    image: hitman,
  },
  {
    name: 'Mahendra Singh Dhoni',
    rating: 4,
    comment: 'Decent experience with prompt service.',
    tags: ['"Decent', 'Prompt Service"'],
    image: msd,
  },
];

const normalUserReviews = [
  {
    name: 'Bhuvanesh',
    rating: 4,
    comment: 'Good service but the car could have been cleaner.',
    tags: ['Good Service', 'Could Be Cleaner'],
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Abishek',
    rating: 5,
    comment: 'Loved the experience! Highly recommend.',
    tags: ['Loved It', 'Highly Recommend'],
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Hari Prakash',
    rating: 3,
    comment: 'The service was okay but not exceptional.',
    tags: ['Okay', 'Not Exceptional'],
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Lingesh',
    rating: 4,
    comment: 'Nice experience, but the pickup was delayed.',
    tags: ['Nice Experience', 'Pickup Delay'],
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Kamalnath',
    rating: 5,
    comment: 'Fantastic service. Will definitely use again.',
    tags: ['Fantastic Service', 'Will Use Again'],
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Aakash',
    rating: 2,
    comment: 'The car had issues. Not satisfied with the service.',
    tags: ['Car Issues', 'Not Satisfied'],
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Manikandan',
    rating: 5,
    comment: 'Excellent from start to finish. Highly recommend.',
    tags: ['Excellent', 'Highly Recommend'],
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Barath',
    rating: 4,
    comment: 'Good service, but the booking process could be improved.',
    tags: ['Good Service', 'Improvement Needed'],
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Deepak Ram',
    rating: 3,
    comment: 'The service was average. Nothing special.',
    tags: ['Average', 'Nothing Special'],
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Jai suryah',
    rating: 5,
    comment: 'Amazing experience! Everything was perfect.',
    tags: ['Amazing Experience', 'Perfect'],
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Hari Prakash_HP',
    rating: 4,
    comment: 'The vehicle was clean and well-maintained. Overall good service.',
    tags: ['Clean Vehicle', 'Good Service'],
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Mukesh',
    rating: 5,
    comment: 'Exceptional service and the car was in perfect condition. Highly recommended!',
    tags: ['Exceptional Service', 'Highly Recommended'],
    image: 'https://via.placeholder.com/100',
  },
];

const ReviewPageContainer = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [tags, setTags] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(null);
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});
  const [reportedReviews, setReportedReviews] = useState([]);

  const handleRatingChange = (newRating) => setRating(newRating);
  const handleCommentChange = (e) => setComment(e.target.value);
  const handleTagChange = (e) => setTags(e.target.value.split(','));
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhotoChange = (e) => setPhoto(e.target.files[0]);

  const handleLike = (index) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [index]: (prevLikes[index] || 0) + 1,
    }));
  };

  const handleDislike = (index) => {
    setDislikes((prevDislikes) => ({
      ...prevDislikes,
      [index]: (prevDislikes[index] || 0) + 1,
    }));
  };

  const handleReport = (index) => {
    setReportedReviews((prevReported) => [...prevReported, index]);
    alert('Review reported for inappropriate content.');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="review-page">
      <div className="form-container">
        <h2>Leave a Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Upload Photo:</label>
            <input
              type="file"
              id="photo"
              onChange={handlePhotoChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={handleCommentChange}
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="tags">Tags (comma separated):</label>
            <input
              type="text"
              id="tags"
              value={tags.join(',')}
              onChange={handleTagChange}
            />
          </div>
          <div className="form-group">
            <label>Rating:</label>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${rating >= star ? 'filled' : ''}`}
                  onClick={() => handleRatingChange(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>

      <div className="reviews-section">
        <h2>Celebrity Reviews</h2>
        <div className="reviews-grid">
          {defaultReviews.map((review, index) => (
            <div className="review-item" key={index}>
              <img src={review.image} alt={review.name} className="review-image" />
              <div className="review-content">
                <h3>{review.name}</h3>
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${review.rating >= star ? 'filled' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p>{review.comment}</p>
                <p className="tags">{review.tags.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="reviews-section">
        <h2>User Reviews</h2>
        <div className="reviews-grid">
          {normalUserReviews.map((review, index) => (
            <div className="review-item" key={index}>
              <img src={review.image} alt={review.name} className="review-image" />
              <div className="review-content">
                <h3>{review.name}</h3>
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${review.rating >= star ? 'filled' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p>{review.comment}</p>
                <p className="tags">{review.tags.join(', ')}</p>
              </div>
              <div className="review-actions">
                <button onClick={() => handleLike(index)}>Like ({likes[index] || 0})</button>
                <button onClick={() => handleDislike(index)}>Dislike ({dislikes[index] || 0})</button>
                <button onClick={() => handleReport(index)}>Report</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPageContainer;
