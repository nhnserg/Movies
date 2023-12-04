import React, { useState } from 'react';
import styles from './styles.module.css';
import moviesStyles from './Movies.module.css';
import { searchMovies } from '../../service/api';

const Movies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const results = await searchMovies(searchQuery);
            setSearchResults(results);
        } catch (error) {
            console.error('Error searching movies:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={moviesStyles.title}>Search Movies</h2>
            <div className={moviesStyles.searchContainer}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={moviesStyles.searchInput}
                />
                <button onClick={handleSearch} className={moviesStyles.searchButton}>Search</button>
            </div>
            <ul className={styles.movieList}>
                {searchResults.map((movie) => (
                    <li key={movie.id} className={styles.movieListItem}>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className={styles.movieImage} />
                        <p>{movie.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;