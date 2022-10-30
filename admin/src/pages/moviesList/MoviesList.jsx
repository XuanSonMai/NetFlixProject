import './moviesList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { useEffect } from 'react';
import { getMovies, deleteMovie } from '../../context/movieContext/apiCalls';

export default function MoviesList() {
    const { movies, dispatch } = useContext(MovieContext);
    {
        console.log('movies', movies);
    }

    useEffect(() => getMovies(dispatch), [dispatch]);
    const handleDelete = (id) => {
        console.log('delete');
        deleteMovie(id, dispatch);
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
            field: 'movie',
            headerName: 'Movie',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="moviesListItem">
                        <img className="moviesListImg" src={params.row.img} alt="" />
                        <h2 className="title">{params.row.title}</h2>
                    </div>
                );
            },
        },
        { field: 'genre', headerName: 'Genre', width: 120 },
        { field: 'year', headerName: 'Year', width: 120 },
        { field: 'limit', headerName: 'Limit', width: 120 },

        { field: 'isSeries', headerName: 'isSeries', width: 120 },

        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/product/' + params.row.id}>
                            <button className="moviesListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="moviesListDelete" onClick={() => handleDelete(params.row._id)} />
                    </>
                );
            },
        },
    ];

    return (
        <div className="moviesList">
            <DataGrid
                rows={movies}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
                getRowId={(r) => r._id}
            />
        </div>
    );
}
