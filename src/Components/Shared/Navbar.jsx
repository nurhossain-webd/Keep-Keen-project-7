'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { FiHome, FiClock, FiBarChart2 } from 'react-icons/fi';

const Navbar = () => {
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Home', icon: <FiHome size={16} /> },
        { href: '/timeline', label: 'Timeline', icon: <FiClock size={16} /> },
        { href: '/stats', label: 'Stats', icon: <FiBarChart2 size={16} /> },
    ];

    const getLinkClass = (href) =>
        `flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all ${pathname === href
            ? 'bg-[#244D3F] text-white'
            : 'text-slate-600 hover:bg-slate-100'
        }`;

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 lg:px-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                    >
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={getLinkClass(link.href)}>
                                    {link.icon}
                                    <span>{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <Link href="/" className="btn btn-ghost normal-case text-2xl font-bold">
                    <p>
                        Keen<span className="text-[#244D3F]">Keeper</span>
                    </p>
                </Link>
            </div>

            <div className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={getLinkClass(link.href)}>
                                {link.icon}
                                <span>{link.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;