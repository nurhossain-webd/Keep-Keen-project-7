'use client';

import React, { createContext, useState } from 'react';

export const TimelineContextProvider = createContext();

const TimelineContext = ({ children }) => {
    const [timeline, setTimeline] = useState([]);

    return (
        <TimelineContextProvider.Provider value={{ timeline, setTimeline }}>
            {children}
        </TimelineContextProvider.Provider>
    );
};

export default TimelineContext;