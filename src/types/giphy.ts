export interface Gif {
    id: string;
    url: string;
}

export interface GifImage {
    id: string;
    images: {
        fixed_height: {
            webp: string;
        };
    };
}

export interface GiphyResponse {
    data: GifImage[];
}