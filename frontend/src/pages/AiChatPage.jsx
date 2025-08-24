import React, { useState } from 'react'
import { aiResponse } from '../lib/api';
import "../pages/AiApp.css";
import Markdown from "react-markdown";

function AiChatPage() {
  const [review, setReview] = useState('');
  const [content, setcontent] = useState(`Write Your content to Review`);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function reviewcontent() {
    setIsLoading(true);
    setError('');
    try {
      // Basic validation: Don't send the placeholder text or empty string to AI
      if (content.trim() === '' || content.trim() === 'Write Your content to Review') {
        setError('Please enter some content to review.');
        return;
      }
      const response = await aiResponse(content);
      setReview(response.data || response);
    } catch (err) {
      console.error("Review fetch error:", err);
      setError('Failed to fetch review. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      reviewcontent();
    }
  };

  const handleFocus = () => {
    if (content === 'Write Your content to Review') {
      setcontent('');
    }
  };

  const handleBlur = () => {
    if (content.trim() === '') {
      setcontent('');
    }
  };

  return (
    <main>
      <div className="review-container">
        {error && <div className="error">{error}</div>}
        {review && <div className="review-output"><Markdown>{review}</Markdown></div>}
      </div>
      <div className="input-container">
        <textarea
          value={content}
          onChange={(e) => setcontent(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            width: "80%",
            fontFamily: '"Fira Code", "Fira Mono", monospace',
            fontSize: 14,
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#2a2a2a',
            color: '#e0e0e0',
            minHeight: '100px',
            maxHeight: '200px',
            overflow: 'auto',
            padding: '10px',
            resize: 'vertical'
          }}
          className="content-input"
          placeholder="Ask something here..."
        />
        <button
          onClick={reviewcontent}
          className={`review-button ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
          aria-label="Review content"
        >
          {isLoading ? 'Analyzing...' : 'Ask'}
        </button>
      </div>
    </main>
  );
}

export default AiChatPage
