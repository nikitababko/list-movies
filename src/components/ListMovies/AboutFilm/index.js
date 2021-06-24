import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './index.scss';

const AboutFilm = () => {
  const initialStateComments = () => {
    if (localStorage.getItem('movieComment')) {
      return JSON.parse(localStorage.getItem('movieComment'));
    } else {
      return [];
    }
  };

  const initialStateFavoriteMovie = () => {
    if (localStorage.getItem('favoritesMovies')) {
      return JSON.parse(localStorage.getItem('favoritesMovies'));
    } else {
      return [];
    }
  };

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(initialStateComments());
  const [movie, setMovie] = useState({});
  const [favoriteMovies, setFavoriteMovies] = useState(
    initialStateFavoriteMovie()
  );

  const { pathname } = useLocation();

  useEffect(() => {
    setMovie(JSON.parse(localStorage.getItem('movie')));
  }, []);

  // Add to favorites
  const addToFavorites = () => {
    setFavoriteMovies([...favoriteMovies, movie]);
    localStorage.setItem(
      'favoritesMovies',
      JSON.stringify(favoriteMovies)
    );
  };

  // Add comment
  const addComment = () => {
    setComments([
      ...comments,
      {
        movieId: movie.id,
        date: new Date().toLocaleString('en-US'),
        text: comment,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem('movieComment', JSON.stringify(comments));
  }, [comments]);

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
          Add to favoritesAdd to favorites
        </button>

        <div className="comments">
          <h4 className="title">Comments</h4>
          {comments.length
            ? comments.map((comment) => (
                <>
                  {comment.movieId.toString() ===
                  pathname.split('/')[1].toString() ? (
                    <div key={comment.date} className="comments__items ">
                      <div className="item">
                        <div className="item__header">
                          <span>You </span>
                          <span>{comment.date}</span>
                        </div>
                        <p className="text">{comment.text}</p>
                      </div>
                    </div>
                  ) : null}
                </>
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
