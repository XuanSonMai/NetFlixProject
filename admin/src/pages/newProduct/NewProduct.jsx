import { useState } from 'react';
import './newProduct.css';
import storage from '../../firebase';
import { storageRef } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { createMovie } from '../../context/movieContext/apiCalls';
import { useContext } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';

export default function NewProduct() {
    const [movie, setMovie] = useState(null);
    const [img, setImg] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);
    const [imgSm, setImgSm] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploaded, setUploaded] = useState(0);

    const { dispatch } = useContext(MovieContext);
    console.log('current field of form typed', movie);
    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value });
    };
    const upload = (items) => {
        console.log('items', items);
        items.forEach((item) => {
            const fileName = new Date().getTime() + item.label + item.file?.name;
            console.log(fileName);

            const storageRef = ref(storage, `/items/${item.file?.name}`);

            const uploadTask = uploadBytesResumable(storageRef, item.file);
            if (item.file) {
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        // Observe state change events such as progress, pause, and resume
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        // switch (snapshot.state) {
                        //     case 'paused':
                        //         console.log('Upload is paused');
                        //         break;
                        //     case 'running':
                        //         console.log('Upload is running');
                        //         break;
                        // }
                    },
                    (err) => console.log(err),
                    () => {
                        // Handle successful uploads on complete
                        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            setMovie((pre) => {
                                return { ...pre, [item.label]: downloadURL };
                            });

                            setUploaded((prev) => prev + 1);
                        });
                    },
                );
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createMovie(movie, dispatch);
    };

    const handleUpload = (e) => {
        e.preventDefault();
        upload([
            { file: img, label: 'img' },
            { file: imgTitle, label: 'imgTitle' },
            { file: imgSm, label: 'imgSm' },
            { file: trailer, label: 'trailer' },
            { file: video, label: 'video' },
        ]);
    };
    console.log('uploaded', uploaded);
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Movie</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Image</label>
                    <input type="file" id="img" name="img" onChange={(e) => setImg(e.target.files[0])} />
                </div>
                <div className="addProductItem">
                    <label>Title image</label>
                    <input type="file" id="imgTitle" name="imgTitle" onChange={(e) => setImgTitle(e.target.files[0])} />
                </div>
                <div className="addProductItem">
                    <label>Thumbnail image</label>
                    <input type="file" id="imgSm" name="imgSm" onChange={(e) => setImgSm(e.target.files[0])} />
                </div>
                <div className="addProductItem">
                    <label>Title</label>
                    <input type="text" placeholder="Title" name="title" onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Description</label>
                    <input type="text" placeholder="Description" name="desc" onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Year</label>
                    <input type="text" placeholder="Year" name="year" onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Genre</label>
                    <input type="text" placeholder="Genre" name="genre" onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Duration</label>
                    <input type="text" placeholder="Duration" name="duration" onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Limit</label>
                    <input type="text" placeholder="limit" name="limit" onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Is Series</label>
                    <select name="isSeries" id="isSeries" onChange={handleChange}>
                        <option value="false">No</option>
                        <option value="true">Yes </option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label>Trailer</label>
                    <input
                        name="trailer"
                        type="file"
                        placeholder="Trailer"
                        onChange={(e) => setTrailer(e.target.files[0])}
                    />
                </div>
                <div className="addProductItem">
                    <label>Video</label>
                    <input name="video" type="file" placeholder="Video" onChange={(e) => setVideo(e.target.files[0])} />
                </div>

                {uploaded === 5 ? (
                    <button className="addProductButton" onClick={handleSubmit}>
                        Create
                    </button>
                ) : (
                    <button className="addProductButton" onClick={handleUpload}>
                        Upload
                    </button>
                )}
            </form>
        </div>
    );
}
