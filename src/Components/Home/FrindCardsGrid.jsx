import React from 'react';
import FriendCard from './FriendCard';

const FrindCardsGrid = () => {
    return (
        <div>
            <p className='text-xl font-bold'>Your Friends</p>
            <div>
                <FriendCard />
            </div>
        </div>
    );
};

export default FrindCardsGrid;