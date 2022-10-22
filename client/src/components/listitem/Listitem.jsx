import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './listitem.scss';

export default function ListItem({ index, item }) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});
    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get('/movies/find/' + item, {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGRiYWIxODA4NjQ4NjI2ODI1MWY2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjM5OTM5MSwiZXhwIjoxNjY2ODMxMzkxfQ.xjx_SgXKKsqXshkbmmlEg4wN3ae2Et4P9-aUSJfEHKk',
                    },
                });

                setMovie(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getMovie();
    }, [item]);

    const navigate = useNavigate();

    const generateQuestions = async (event) => {
        event.preventDefault();
        navigate('/watch', { state: { movie: movie } });
    };
    return (
        <Link to={{ pathname: '/watch' }} onClick={generateQuestions}>
            <div
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                className="listItem"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img className="listItemImg" src={movie.img} alt="noImage"></img>

                {isHovered && (
                    <>
                        <video src={movie.trailer} autoPlay={true} loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className="icon" />
                                <Add className="icon" />
                                <ThumbUpAltOutlined className="icon" />
                                <ThumbDownOutlined className="icon" />
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie.duration}</span>
                                <span className="limit">{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="desc">{movie.desc}</div>
                            <div className="genre">{movie.genre}</div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    );
}

// export default function ListItem({ imgUrl, index, item }) {
//     const [isHovered, setIsHovered] = useState(false);
//     const [movie, setMovie] = useState({});
//     const trailer =
//         'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';

//     useEffect(() => {
//         const getMovie = async () => {
//             try {
//                 const res = await axios.get('/movies/find/' + item, {
//                     headers: {
//                         token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGRiYWIxODA4NjQ4NjI2ODI1MWY2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjM5OTM5MSwiZXhwIjoxNjY2ODMxMzkxfQ.xjx_SgXKKsqXshkbmmlEg4wN3ae2Et4P9-aUSJfEHKk',
//                     },
//                 });

//                 setMovie(res.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         getMovie();
//     }, [item]);
//     return (
//         <div
//             style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
//             className="listItem"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >
//             <img className="listItemImg" src={imgUrl} alt="noImage"></img>

//             {isHovered && (
//                 <>
//                     <video src={movie.trailer} autoPlay={true} loop />
//                     <div className="itemInfo">
//                         <div className="icons">
//                             <PlayArrow className="icon" />
//                             <Add className="icon" />
//                             <ThumbUpAltOutlined className="icon" />
//                             <ThumbDownOutlined className="icon" />
//                         </div>
//                         <div className="itemInfoTop">
//                             <span>{movie.duration}</span>
//                             <span className="limit">{movie.limit}</span>
//                             <span>{movie.year}</span>
//                         </div>
//                         <div className="desc">{movie.desc}</div>
//                         <div className="genre">{movie.action}</div>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }
