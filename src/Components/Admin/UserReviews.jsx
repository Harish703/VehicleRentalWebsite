import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Admin/UserReviews.css';

const SummaryStatistics = ({ reviews }) => {
  const totalReviews = reviews.length;
  const averageRating = (totalReviews === 0 ? 0 : (reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews)).toFixed(1);
  const ratingCounts = [1, 2, 3, 4, 5].map(star => reviews.filter(review => review.rating === star).length);

  return (
    <div className="summary-statistics">
      <h2>Summary Statistics</h2>
      <div className="stats">
        <div className="stat-item">
          <h3>Total Reviews</h3>
          <p>{totalReviews}</p>
        </div>
        <div className="stat-item">
          <h3>Average Rating</h3>
          <p>{averageRating}</p>
        </div>
        {ratingCounts.map((count, index) => (
          <div className="stat-item" key={index}>
            <h3>{index + 1} Star Reviews</h3>
            <p>{count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

SummaryStatistics.propTypes = {
  reviews: PropTypes.array.isRequired
};

const ReviewDetails = ({ review, onEditClick }) => (
  <div className="review-details">
    <img src={review.image} alt={review.name} className="review-image" />
    <div className="review-content">
      <h3>{review.name}</h3>
      <div className="rating">
        {[1, 2, 3, 4, 5].map(star => (
          <span key={star} className={`star ${review.rating >= star ? 'filled' : ''}`}>★</span>
        ))}
      </div>
      <p>{review.comment}</p>
      <p className="tags">{review.tags.join(', ')}</p>
      <button onClick={() => onEditClick(review)}>Edit</button>
    </div>
  </div>
);

ReviewDetails.propTypes = {
  review: PropTypes.object.isRequired,
  onEditClick: PropTypes.func.isRequired
};

const ReviewActions = ({ review, onLike, onDislike, onReport, onApprove, onReject }) => (
  <div className="review-actions">
    <button onClick={() => onLike(review.index)}>Like ({review.likes})</button>
    <button onClick={() => onDislike(review.index)}>Dislike ({review.dislikes})</button>
    <button onClick={() => onReport(review.index)}>Report</button>
    {review.status === 'pending' && (
      <>
        <button onClick={() => onApprove(review.index)}>Approve</button>
        <button onClick={() => onReject(review.index)}>Reject</button>
      </>
    )}
  </div>
);

ReviewActions.propTypes = {
  review: PropTypes.object.isRequired,
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired,
  onReport: PropTypes.func.isRequired,
  onApprove: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired
};

const EditDeleteReview = ({ review, onEdit, onDelete }) => (
  <div className="edit-delete">
    <button onClick={() => onEdit(review.index)}>Edit</button>
    <button onClick={() => onDelete(review.index)}>Delete</button>
  </div>
);

EditDeleteReview.propTypes = {
  review: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

const AdminResponse = ({ review, onRespond }) => {
  const [response, setResponse] = useState('');

  const handleChange = (e) => setResponse(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onRespond(review.index, response);
    setResponse('');
  };

  return (
    <form onSubmit={handleSubmit} className="admin-response">
      <textarea
        value={response}
        onChange={handleChange}
        placeholder="Write your response..."
      />
      <button type="submit">Submit Response</button>
    </form>
  );
};

AdminResponse.propTypes = {
  review: PropTypes.object.isRequired,
  onRespond: PropTypes.func.isRequired
};

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => onSearch(e.target.value);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search reviews..."
        onChange={handleChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
};

const UserReviews = ({ reviews = [], onEdit, onDelete, onLike, onDislike, onReport, onApprove, onReject, onRespond }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [editingReview, setEditingReview] = useState(null);

  const handleSearch = (query) => setSearchQuery(query);

  const filteredReviews = reviews.filter(review =>
    review.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    review.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
    review.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleEditClick = (review) => setEditingReview(review);

  const handleEditSubmit = (editedReview) => {
    onEdit(editedReview);
    setEditingReview(null);
  };

  return (
    <div className="user-reviews">
      <SummaryStatistics reviews={reviews} />
      <SearchBar onSearch={handleSearch} />
      <div className="reviews-list">
        {editingReview ? (
          <div className="edit-form">
            <h3>Edit Review</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleEditSubmit(editingReview);
            }}>
              <input
                type="text"
                value={editingReview.name}
                onChange={(e) => setEditingReview({ ...editingReview, name: e.target.value })}
                placeholder="Name"
              />
              <input
                type="number"
                value={editingReview.rating}
                onChange={(e) => setEditingReview({ ...editingReview, rating: parseInt(e.target.value) })}
                min="1"
                max="5"
                placeholder="Rating (1-5)"
              />
              <textarea
                value={editingReview.comment}
                onChange={(e) => setEditingReview({ ...editingReview, comment: e.target.value })}
                placeholder="Comment"
              />
              <input
                type="text"
                value={editingReview.tags.join(', ')}
                onChange={(e) => setEditingReview({ ...editingReview, tags: e.target.value.split(',').map(tag => tag.trim()) })}
                placeholder="Tags (comma separated)"
              />
              <button type="submit">Save Changes</button>
              <button type="button" onClick={() => setEditingReview(null)}>Cancel</button>
            </form>
          </div>
        ) : (
          filteredReviews.length > 0 ? (
            filteredReviews.map((review, index) => (
              <div className="review-item" key={index}>
                <ReviewDetails review={{ ...review, index }} onEditClick={handleEditClick} />
                <ReviewActions
                  review={{ ...review, index }}
                  onLike={onLike}
                  onDislike={onDislike}
                  onReport={onReport}
                  onApprove={onApprove}
                  onReject={onReject}
                />
                <EditDeleteReview
                  review={{ ...review, index }}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
                <AdminResponse
                  review={{ ...review, index }}
                  onRespond={onRespond}
                />
              </div>
            ))
          ) : (
            <p>No reviews found.</p>
          )
        )}
      </div>
    </div>
  );
};

UserReviews.propTypes = {
  reviews: PropTypes.array,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired,
  onReport: PropTypes.func.isRequired,
  onApprove: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
  onRespond: PropTypes.func.isRequired
};

export default UserReviews;
