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
                const res = await axios.get(`/list/options${type ? '?type=' + type : ''}`, {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGRiYWIxODA4NjQ4NjI2ODI1MWY2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjM5OTM5MSwiZXhwIjoxNjY2ODMxMzkxfQ.xjx_SgXKKsqXshkbmmlEg4wN3ae2Et4P9-aUSJfEHKk',
                    },
                });

                setLists(res.data);
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
            {lists.map((list, index) => (
                <List key={index} list={list} />
            ))}
        </div>
    );
};
