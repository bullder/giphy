import React from 'react';
import { Gif } from '../types/giphy';
import GifImg from './GifImg';

interface GifGridProps {
    gifs: Gif[];
    likedGifs: Gif[];
    setLikedGifs: (likedGifs: Gif[]) => void;
}

const GifGrid: React.FC<GifGridProps> = ({ gifs, likedGifs, setLikedGifs }) => {
    return (
        <div className="gif-grid">
            {gifs.map((gif, index) => (
                <GifImg key={`${gif.id}-${index}`} gif={gif} likedGifs={likedGifs} setLikedGifs={setLikedGifs} />
            ))}
        </div>
    );
};

export default GifGrid;