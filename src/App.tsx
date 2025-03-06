import React, { useState, useEffect } from 'react';
import { fetchTrendingGifs, searchGifs } from './api/giphy';
import GifGrid from './components/GifGrid';
import SearchBar from './components/SearchBar';
import ShowLikesButton from './components/ShowLikesButton';
import LoadMoreButton from './components/LoadMoreButton';
import { Gif } from './types/giphy';

const App: React.FC = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [likedGifs, setLikedGifs] = useState<Gif[]>([]);
    const [showLiked, setShowLiked] = useState(false);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const loadTrendingGifs = async () => {
            const trendingGifs = await fetchTrendingGifs(offset);
            setGifs((prevGifs) => [...prevGifs, ...trendingGifs]);
        };

        const likedGifsFromStorage = JSON.parse(localStorage.getItem('likedGifs') || '[]');
        setLikedGifs(likedGifsFromStorage);

        loadTrendingGifs();
    }, [offset]);

    const handleSearch = async (query: string) => {
        if (query.trim() === '') {
            const trendingGifs = await fetchTrendingGifs(0);
            setGifs(trendingGifs);
        } else {
            const searchedGifs = await searchGifs(query);
            setGifs(searchedGifs);
        }
    };

    const loadMore = () => {
        setOffset((prevOffset) => prevOffset + 25);
    };

    const handleToggleShowLiked = () => {
        setShowLiked(!showLiked);
    };

    const filteredGifs = showLiked ? likedGifs : gifs;

    return (
        <div className="App">
            <SearchBar onSearch={handleSearch} />
            <GifGrid gifs={filteredGifs} likedGifs={likedGifs} setLikedGifs={setLikedGifs} />
            {!showLiked && <LoadMoreButton onClick={loadMore} />}
            <ShowLikesButton showLiked={showLiked} onClick={handleToggleShowLiked} />
        </div>
    );
};

export default App;