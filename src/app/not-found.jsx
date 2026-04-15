import Link from 'next/link';
import { LuArrowLeft, LuCircleAlert } from 'react-icons/lu';

const NotFoundPage = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-6">
            <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <LuCircleAlert size={32} />
                </div>

                <h1 className="mt-6 text-5xl font-bold text-slate-800">404</h1>

                <h2 className="mt-3 text-2xl font-semibold text-[#244D3F]">
                    Page Not Found
                </h2>

                <p className="mt-4 text-sm md:text-base text-slate-500">
                    Sorry, the page you are looking for does not exist or may have been moved.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#244D3F] px-5 py-3 text-sm font-medium text-white transition hover:opacity-95"
                >
                    <LuArrowLeft size={18} />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;