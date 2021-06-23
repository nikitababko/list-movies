import React, { useState, useEffect } from 'react';

import './index.scss';

const AboutFilm = () => {
  const initialStateComments = () => {
    if (localStorage.getItem('movieComment')) {
      return JSON.parse(localStorage.getItem('movieComment'));
    } else {
      return [];
    }
  };

  const [oldComments, setOldComments] = useState(
    JSON.parse(localStorage.getItem('movieComment'))
  );
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(initialStateComments());
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(JSON.parse(localStorage.getItem('movie')));
    // localStorage.setItem('movieComment', JSON.stringify(comments));
  }, []);

  // Add to favorites
  const addToFavorites = () => {
    localStorage.setItem('favoriteMovie', JSON.stringify(movie));
  };

  // Add comment
  const addComment = () => {
    setComments([
      ...comments,
      { date: new Date().toLocaleString('en-US'), text: comment },
    ]);
    localStorage.setItem('movieComment', JSON.stringify(comments));
  };

  console.log(comments);

  return (
    <div className="about-film">
      <div className="about-film__left-col">
        <img src={movie.large_cover_image} alt="" />
      </div>

      <div className="about-film__right-col">
        <h2 className="title">{movie.title}</h2>
        <p className="rating">
          <span>Rating: </span>
          {movie.rating}
        </p>
        <p className="runtime">Runtime: {movie.runtime} min</p>
        <p className="year">Year: {movie.year}</p>
        <div className="genres">
          <span>Genres:</span>
          {/* <p>{movie.genres[0]}</p> */}
        </div>
        <p className="synopsis">
          <h3>Synopsis</h3>
          <p>{movie.synopsis}</p>
        </p>
        <button onClick={addToFavorites} className="button-favorites">
          Add to favorites
        </button>

        <div className="comments">
          <h4 className="title">Comments</h4>
          {oldComments
            ? oldComments.map((comment) => (
                <div key={comment.date} className="comments__items ">
                  <div className="item">
                    <div className="item__header">
                      <span>You </span>
                      <span>{comment.date}</span>
                    </div>
                    <p className="text">{comment.text}</p>
                  </div>
                </div>
              ))
            : null}

          <div className="form-comment">
            <input
              type="text"
              placeholder="Leave a comment"
              value={comment.text}
              onChange={(e) => setComment(e.target.value)}
            />
            <button className="form-comment__button" onClick={addComment}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFilm;
