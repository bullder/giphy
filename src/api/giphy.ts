import { Gif, GiphyResponse } from '../types/giphy.ts';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const BASE_URL = 'https://api.giphy.com/v1/gifs';

export const fetchTrendingGifs = async (offset: number = 0): Promise<Gif[]> => {
    return makeRequest(`${BASE_URL}/trending?api_key=${API_KEY}&limit=25&offset=${offset}`);
};

export const searchGifs = async (query: string, offset: number = 0): Promise<Gif[]> => {
    return makeRequest(`${BASE_URL}/search?api_key=${API_KEY}&q=${query}&limit=25&offset=${offset}`);
};

export const makeRequest = async (url: string): Promise<Gif[]> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch GIFs');
    }
    const data: GiphyResponse = await response.json();

    return data.data.map(gif => ({
        id: gif.id,
        url: gif.images.fixed_height.webp
    }));
};
