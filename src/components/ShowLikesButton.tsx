import React from 'react';

interface ShowLikesButtonProps {
    showLiked: boolean;
    onClick: () => void;
}

const ShowLikesButton: React.FC<ShowLikesButtonProps> = ({ showLiked, onClick }) => {
    return (
        <div className="show-likes-button-container">
            <button onClick={onClick}>
                {showLiked ? 'Show All GIFs' : 'Show Liked GIFs'}
            </button>
        </div>
    );
};

export default ShowLikesButton;
