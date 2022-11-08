import { useEffect, useState } from 'react';
import './newList.css';
import storage from '../../firebase';
import { storageRef } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { createMovie, getMovies } from '../../context/movieContext/apiCalls';
import { useContext } from 'react';

import { ListContext } from '../../context/listContext/ListContext';
import { MovieContext } from '../../context/movieContext/MovieContext';

export default function NewList() {
    const [list, setList] = useState(null);

    const { dispatch } = useContext(ListContext);
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatchMovie);
    }, [dispatchMovie]);

    const handleChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleSelect = (e) => {
        console.log(e.target.selectedOptions);
    };

    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Movie</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Title</label>
                    <input type="text" placeholder="Title" name="title" onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Genre</label>
                    <input type="text" placeholder="Genre" name="genre" onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Type</label>
                    <select name="type" id="" onChange={handleChange}>
                        <option value="movie">Movies</option>
                        <option value="series">Series</option>
                    </select>
                </div>

                <div className="addProductItem">
                    <label>Content</label>
                    <select multiple name="type" id="" onChange={handleSelect}>
                        {movies.map((movie) => (
                            <option key={movie._id} value={movie._id}>
                                {movie.title}
                            </option>
                        ))}
                        <option value="movie">Movies</option>
                    </select>
                </div>
                <button className="addProductButton" onClick={handleSubmit}>
                    Create
                </button>
            </form>
        </div>
    );
}
