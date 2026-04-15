'use client';

import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center">
            <Oval
                visible={true}
                height="80"
                width="80"
                color="#244D3F"
                ariaLabel="oval-loading"
                secondaryColor="#d1d5db"
                strokeWidth={4}
                strokeWidthSecondary={4}
            />
        </div>
    );
};

export default Loading;