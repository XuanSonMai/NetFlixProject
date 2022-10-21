import { useEffect } from 'react';
import { useState } from 'react';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import { Navbar } from '../../components/navbar/Navbar';
import './home.scss';
import axios from 'axios';

export const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`list/options${type && '?type=' + type}`);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };

        getRandomLists();
    }, [type, genre]);

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} />
            <List />
            <List />

            <List />

            <List />
        </div>
    );
};
