import { useEffect } from 'react';
import { useState } from 'react';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import { Navbar } from '../../components/navbar/Navbar';
import './home.scss';
import axios from 'axios';

export const Home = ({ type, title }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    console.log('genre', genre);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`/lists/options${type ? '?type=' + type : ''}`, {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGRiYWIxODA4NjQ4NjI2ODI1MWY2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODE3NTMxOSwiZXhwIjoxNjY4NjA3MzE5fQ.LKBQtKimuHTKCTub0MAJ_kC0CQ5OuIexPw5lCQW9Gco',
                    },
                });
                console.log('url', `/lists/options${type ? '?type=' + type : ''}`);
                console.log('resdata', res.data);
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
            <Featured type={type} title={title} setGenre={setGenre} />
            {lists.map((list, index) => (
                <List key={index} list={list} />
            ))}
        </div>
    );
};
