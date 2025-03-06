import React from 'react';
import { Gif } from '../types/giphy';
import '../styles/GifImg.css';

interface GifImgProps {
    gif: Gif;
    likedGifs: Gif[];
    setLikedGifs: (likedGifs: Gif[]) => void;
}

const GifImg: React.FC<GifImgProps> = ({ gif, likedGifs, setLikedGifs }) => {
    const isLiked = likedGifs.some(likedGif => likedGif.id === gif.id);

    const handleLike = () => {
        const updatedLikedGifs = isLiked
            ? likedGifs.filter(likedGif => likedGif.id !== gif.id)
            : [...likedGifs, { id: gif.id, url: gif.url }];

        setLikedGifs(updatedLikedGifs);
        localStorage.setItem('likedGifs', JSON.stringify(updatedLikedGifs));
    };

    return (
        <div className="gif-container">
            <img src={gif.url} alt={gif.id} className="gif-image" />
            <button className={`like-button ${isLiked ? 'liked' : ''}`} onClick={handleLike}>
                ❤
            </button>
        </div>
    );
};

export default GifImg;