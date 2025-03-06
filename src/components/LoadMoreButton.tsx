import React from 'react';

interface LoadMoreButtonProps {
    onClick: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => {
    return (
        <div className="load-more-container">
            <button className="load-more" onClick={onClick}>Load More</button>
        </div>
    );
};

export default LoadMoreButton;