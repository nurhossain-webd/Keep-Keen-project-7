const SummaryCards = () => {
    const summaryData = [
        { id: 1, value: 10, label: 'Total Friends' },
        { id: 2, value: 3, label: 'On Track' },
        { id: 3, value: 6, label: 'Need Attention' },
        { id: 4, value: 12, label: 'Interactions This Month' },
    ];

    return (
        <section className="pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {summaryData.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-lg border border-slate-200 bg-white py-8 px-4 text-center shadow-sm"
                    >
                        <h3 className="text-3xl font-bold text-[#244D3F]">
                            {item.value}
                        </h3>
                        <p className="mt-2 text-sm md:text-base text-slate-500">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-8 border-t border-slate-200"></div>
        </section>
    );
};

export default SummaryCards;