import Image from 'next/image';
import React from 'react';
import { LuBell, LuArchive, LuTrash2, LuPhone, LuMessageSquare, LuVideo } from 'react-icons/lu';
import QuickCheckIn from '@/Components/FriendDetails/QuickCheckIn';

const FriendId = async ({ params }) => {
    const { friendId } = await params;
    const res = await fetch('/friendsData/FriendsData.json', { cache: 'no-store' });
    const friends = await res.json();
    const friend = friends.find(f => f.id === parseInt(friendId));

    return (
        <div className="w-10/12 mx-auto py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm flex flex-col items-center text-center">
                        <Image
                            src={friend.picture}
                            alt={friend.name}
                            width={80}
                            height={80}
                            className="w-20 h-20 rounded-full object-cover"
                        />

                        <h2 className="mt-4 text-3xl font-bold text-slate-800">
                            {friend.name}
                        </h2>

                        <span
                            className={`mt-3 rounded-full px-3 py-1 text-xs font-medium text-white ${friend.status === 'overdue'
                                ? 'bg-red-500'
                                : friend.status === 'almost due'
                                    ? 'bg-yellow-400'
                                    : 'bg-[#244D3F]'
                                }`}
                        >
                            {friend.status}
                        </span>

                        <div className="mt-3 flex flex-wrap justify-center gap-2">
                            {friend.tags?.map((tag, index) => (
                                <span
                                    key={index}
                                    className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium uppercase text-[#244D3F]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="mt-4 text-slate-500 italic">
                            {friend.bio}
                        </p>

                        <p className="mt-2 text-sm text-slate-500">
                            Preferred: {friend.email}
                        </p>
                    </div>

                    <button className="w-full rounded-lg border border-slate-200 bg-white py-4 text-sm shadow-sm flex items-center justify-center gap-2">
                        <LuBell size={16} />
                        Snooze 2 Weeks
                    </button>

                    <button className="w-full rounded-lg border border-slate-200 bg-white py-4 text-sm shadow-sm flex items-center justify-center gap-2">
                        <LuArchive size={16} />
                        Archive
                    </button>

                    <button className="w-full rounded-lg border border-slate-200 bg-white py-4 text-sm text-red-500 shadow-sm flex items-center justify-center gap-2">
                        <LuTrash2 size={16} />
                        Delete
                    </button>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm text-center">
                            <h3 className="text-4xl font-bold text-[#244D3F]">
                                {friend.days_since_contact}
                            </h3>
                            <p className="mt-2 text-sm text-slate-500">
                                Days Since Contact
                            </p>
                        </div>

                        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm text-center">
                            <h3 className="text-4xl font-bold text-[#244D3F]">
                                {friend.goal}
                            </h3>
                            <p className="mt-2 text-sm text-slate-500">
                                Goal (Days)
                            </p>
                        </div>

                        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm text-center">
                            <h3 className="text-3xl font-bold text-[#244D3F]">
                                {friend.next_due_date}
                            </h3>
                            <p className="mt-2 text-sm text-slate-500">
                                Next Due
                            </p>
                        </div>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-semibold text-[#244D3F]">
                                Relationship Goal
                            </h3>
                            <button className="rounded-md border border-slate-200 px-4 py-2 text-sm">
                                Edit
                            </button>
                        </div>

                        <p className="mt-4 text-lg text-slate-500">
                            Connect every{' '}
                            <span className="font-bold text-slate-700">
                                {friend.goal} days
                            </span>
                        </p>
                    </div>
                    <QuickCheckIn friendName={friend.name} />
                </div>
            </div>
        </div>
    );
};

export default FriendId;