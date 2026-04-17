import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white mt-16">
            <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-16">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-4xl md:text-6xl font-bold">KeenKeeper</h2>

                    <p className="mt-4 max-w-3xl text-sm md:text-base text-gray-200">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>

                    <h3 className="mt-8 text-xl md:text-2xl font-semibold">
                        Social Links
                    </h3>

                    <div className="mt-4 flex items-center gap-4">
                        <a
                            className="w-10 h-10 rounded-full bg-white text-[#244D3F] flex items-center justify-center hover:scale-105 transition"
                        >
                            <FaInstagram size={18} />
                        </a>

                        <a
                            className="w-10 h-10 rounded-full bg-white text-[#244D3F] flex items-center justify-center hover:scale-105 transition"
                        >
                            <FaFacebookF size={16} />
                        </a>

                        <a

                            className="w-10 h-10 rounded-full bg-white text-[#244D3F] flex items-center justify-center hover:scale-105 transition"
                        >
                            <FaXTwitter size={16} />
                        </a>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-gray-300">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex items-center gap-4 md:gap-8">
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                        <Link href="#">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;