'use client';

import React, { useContext, useMemo, useState } from 'react';
import {
    LuPhone,
    LuMessageSquare,
    LuVideo,
    LuSearch,
    LuListFilter,
    LuArrowUpDown
} from 'react-icons/lu';
import { TimelineContextProvider } from '@/context/TimelineContext';

const TimelinePage = () => {
    const { timeline } = useContext(TimelineContextProvider);

    const [filterType, setFilterType] = useState('All');
    const [sortOrder, setSortOrder] = useState('newest');
    const [searchText, setSearchText] = useState('');

    const getIcon = (type) => {
        if (type === 'Call') return <LuPhone size={26} />;
        if (type === 'Text') return <LuMessageSquare size={26} />;
        if (type === 'Video') return <LuVideo size={26} />;
        return null;
    };

    const displayedTimeline = useMemo(() => {
        let updatedTimeline = [...timeline];

        if (filterType !== 'All') {
            updatedTimeline = updatedTimeline.filter(
                (item) => item.type === filterType
            );
        }

        if (searchText.trim() !== '') {
            const lowerSearch = searchText.toLowerCase();

            updatedTimeline = updatedTimeline.filter((item) =>
                item.friendName.toLowerCase().includes(lowerSearch) ||
                item.type.toLowerCase().includes(lowerSearch) ||
                item.title.toLowerCase().includes(lowerSearch)
            );
        }

        updatedTimeline.sort((a, b) => {
            const dateA = new Date(a.createdAt || `${a.date} ${a.time}`);
            const dateB = new Date(b.createdAt || `${b.date} ${b.time}`);

            if (sortOrder === 'newest') {
                return dateB - dateA;
            } else {
                return dateA - dateB;
            }
        });

        return updatedTimeline;
    }, [timeline, filterType, sortOrder, searchText]);

    return (
        <div className="w-10/12 mx-auto py-12">
            <h1 className="text-5xl font-bold text-slate-800">Timeline</h1>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                    <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search by friend or type"
                        className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm shadow-sm outline-none"
                    />
                </div>

                <div className="relative">
                    <LuListFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="w-full appearance-none rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm shadow-sm outline-none"
                    >
                        <option value="All">All Types</option>
                        <option value="Call">Call</option>
                        <option value="Text">Text</option>
                        <option value="Video">Video</option>
                    </select>
                </div>

                <div className="relative">
                    <LuArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="w-full appearance-none rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm shadow-sm outline-none"
                    >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                    </select>
                </div>
            </div>

            <div className="mt-8 space-y-4">
                {displayedTimeline.length > 0 ? (
                    displayedTimeline.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm flex items-center gap-4"
                        >
                            <div className="text-slate-600">
                                {getIcon(item.type)}
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-slate-800">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-500">
                                    {item.date} • {item.time}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="rounded-lg border border-slate-200 bg-white px-5 py-6 shadow-sm text-slate-500">
                        No matching timeline entries found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimelinePage;