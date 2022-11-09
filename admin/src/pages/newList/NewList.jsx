import { useEffect, useState } from 'react';
import './newList.css';
import storage from '../../firebase';
import { storageRef } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { createMovie, getMovies } from '../../context/movieContext/apiCalls';
import { useContext } from 'react';

import { ListContext } from '../../context/listContext/ListContext';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { createList } from '../../context/listContext/apiCalls';

export default function NewList() {
    const [list, setList] = useState(null);

    const { dispatch } = useContext(ListContext);
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

    console.log('current list', list);

    useEffect(() => {
        getMovies(dispatchMovie);
    }, [dispatchMovie]);

    const handleChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createList(list, dispatch);
    };

    const handleSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, (option) => option.value);
        setList({ ...list, [e.target.name]: value });
    };

    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Movie</h1>
            <form className="addProductForm">
                <div className="formLeft">
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
                </div>

                <div className="formRight">
                    <div className="addProductItem">
                        <label>Content</label>
                        <select multiple name="content" id="" onChange={handleSelect} style={{ height: '300px' }}>
                            {movies.map((movie) => (
                                <option className="title-Content" key={movie._id} value={movie._id}>
                                    {movie.title.toUpperCase()}
                                </option>
                            ))}
                            <option value="movie">Movies</option>
                        </select>
                    </div>
                </div>
                <button className="addProductButton" onClick={handleSubmit}>
                    Create
                </button>
            </form>
        </div>
    );
}
