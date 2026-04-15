import React, { Suspense } from 'react';
import FriendCard from './FriendCard';
import Loader from '../Shared/Loader';

const FrindCardsGrid = () => {
    return (
        <div>
            <p className='text-xl font-bold'>Your Friends</p>
            <div>
                <Suspense fallback={<Loader />}>
                    <FriendCard />
                </Suspense>
            </div>
        </div>
    );
};

export default FrindCardsGrid;