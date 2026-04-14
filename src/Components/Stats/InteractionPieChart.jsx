'use client';

import { TimelineContextProvider } from '@/context/TimelineContext';
import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const InteractionPieChart = () => {
    const { timeline } = useContext(TimelineContextProvider);

    const call = timeline.filter(item => item.type === 'Call').length;
    const text = timeline.filter(item => item.type === 'Text').length;
    const video = timeline.filter(item => item.type === 'Video').length;

    const data = [
        { name: 'Text', value: text },
        { name: 'Call', value: call },
        { name: 'Video', value: video },
    ];

    const COLORS = ['#7C3AED', '#244D3F', '#45B36B'];

    return (
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#244D3F]">
                By Interaction Type
            </h3>

            <div className="mt-6 h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="45%"
                            innerRadius={55}
                            outerRadius={85}
                            paddingAngle={6}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                            ))}
                        </Pie>

                        <Tooltip />
                        <Legend
                            verticalAlign="bottom"
                            align="center"
                            iconType="circle"
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default InteractionPieChart;