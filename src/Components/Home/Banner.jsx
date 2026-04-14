import { FiPlus } from 'react-icons/fi';

const Banner = () => {
    return (
        <section className="py-16 md:py-20">
            <div className="flex flex-col items-center text-center">
                <h1 className="max-w-3xl text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
                    Friends to keep close in your life
                </h1>

                <p className="mt-4 max-w-xl text-sm md:text-base text-slate-500">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <button className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#244D3F] px-5 py-3 text-sm font-medium text-white transition hover:opacity-95">
                    <FiPlus size={16} />
                    Add a Friend
                </button>
            </div>
        </section>
    );
};

export default Banner;