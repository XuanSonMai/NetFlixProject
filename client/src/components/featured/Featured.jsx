import './featured.scss';
import { infoImage, netFlixImage, ptvhImage } from '../../img/img.js';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';

export default function Featured({ type }) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
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

            <img src={ptvhImage} alt=""></img>

            <div className="info">
                <img src={infoImage} alt="" />
                <span className="desc">
                    React Netflix Movie App Design Tutorial | React UI Full Course for Beginners React Netflix Movie App
                    Design Tutorial | React UI Full Course for Beginners React Netflix Movie App Design Tutorial | React
                    UI Full Course for Beginners
                </span>
                s
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
        </div>
    );
}
