import './featured.scss';
import { infoImage, netFlixImage, ptvhImage } from '../../img/img.js';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import ptvh1Img from '../../acsets/img/ptvh1.jpeg';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
export default function Featured({ type, title, setGenre }) {
    const [movieContent, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}` + `${title ? '&title=' + title : ''}`, {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGRiYWIxODA4NjQ4NjI2ODI1MWY2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODE3NTMxOSwiZXhwIjoxNjY4NjA3MzE5fQ.LKBQtKimuHTKCTub0MAJ_kC0CQ5OuIexPw5lCQW9Gco',
                    },
                });
                setContent(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getRandomContent();
    }, [type]);

    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
                    <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
                        <option>Genre</option>
                        <option value="adventure">Series</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}

            {Array.isArray(movieContent) &&
                movieContent.map((item, i) => {
                    return (
                        <>
                            <img src={item.img} alt=""></img>

                            <div className="info">
                                <img src={item.imgTitle} alt="" />
                                <span className="desc">{item.desc}</span>
                                <div className="buttons">
                                    <button className="play">
                                        <PlayArrow />
                                    </button>
                                    <button className="more">
                                        <InfoOutlined />
                                        <span>Info</span>
                                    </button>
                                </div>
                            </div>
                        </>
                    );
                })}
        </div>
    );
}
