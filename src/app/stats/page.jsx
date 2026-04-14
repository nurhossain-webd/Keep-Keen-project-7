import React from 'react';
import InteractionPieChart from '@/Components/Stats/InteractionPieChart';

const StatsPage = () => {
    return (
        <div className="w-10/12 mx-auto py-12">
            <h1 className="text-5xl font-bold text-slate-800 mb-8">
                Friendship Analytics
            </h1>

            <InteractionPieChart />
        </div>
    );
};

export default StatsPage;