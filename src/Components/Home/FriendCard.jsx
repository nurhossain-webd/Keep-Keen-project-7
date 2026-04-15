import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = async () => {
    const friendsData = await fetch('https://keep-keen-project-7-alpha.vercel.app/friendsData/FriendsData.json');
    const friends = await friendsData.json();

    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {
                friends.map(friend => (
                    <Link href={`/friends/${friend.id}`} key={friend.id}>
                        <div
                            key={friend.id}
                            className="rounded-lg border border-slate-200 bg-white px-6 py-6 shadow-sm mb-4 flex flex-col items-center text-center"
                        >

                            <Image src={friend.picture}
                                alt={friend.name}
                                width={80}
                                height={80}
                                className="w-20 h-20 rounded-full object-cover" />

                            <h3 className="text-2xl font-semibold text-slate-800">
                                {friend.name}
                            </h3>

                            <p className="mt-1 text-sm text-slate-400">
                                {friend.days_since_contact}d ago
                            </p>

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

                            <span
                                className={`mt-3 rounded-full px-3 py-1 text-xs font-medium text-white ${friend.status === 'overdue'
                                    ? 'bg-red-500'
                                    : friend.status === 'almost due'
                                        ? 'bg-yellow-400 text-white'
                                        : 'bg-[#244D3F]'
                                    }`}
                            >
                                {friend.status}
                            </span>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default FriendCard;