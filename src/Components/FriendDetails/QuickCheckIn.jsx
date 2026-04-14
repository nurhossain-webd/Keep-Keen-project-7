'use client';

import React, { useContext, useState } from 'react';
import { LuPhone, LuMessageSquare, LuVideo } from 'react-icons/lu';
import { TimelineContextProvider } from '@/context/TimelineContext';
import { toast, } from 'react-toastify';

const QuickCheckIn = ({ friendName }) => {
    const { timeline, setTimeline } = useContext(TimelineContextProvider);
    const [activeType, setActiveType] = useState('');

    const handleAdd = (type) => {
        const now = new Date();

        const newEntry = {
            id: Date.now(),
            type,
            title: `${type} with ${friendName}`,
            friendName,
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
            }),
        };

        setTimeline([newEntry, ...timeline]);
        setActiveType(type);

        toast.success(`${type} with ${friendName} `);

    };

    const buttonClass = () =>
        `rounded-lg border py-6 shadow-sm flex flex-col items-center justify-center transition duration-150 active:scale-95 border-slate-400 bg-white`;

    return (
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-2xl font-semibold text-[#244D3F]">
                Quick Check-In
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                    onClick={() => handleAdd('Call')}
                    className={buttonClass('Call')}
                >
                    <LuPhone size={26} />
                    <span className="mt-2 text-base">Call</span>
                </button>

                <button
                    onClick={() => handleAdd('Text')}
                    className={buttonClass('Text')}
                >
                    <LuMessageSquare size={26} />
                    <span className="mt-2 text-base">Text</span>
                </button>

                <button
                    onClick={() => handleAdd('Video')}
                    className={buttonClass('Video')}
                >
                    <LuVideo size={26} />
                    <span className="mt-2 text-base">Video</span>
                </button>
            </div>
        </div>
    );
};

export default QuickCheckIn;