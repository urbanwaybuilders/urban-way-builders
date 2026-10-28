
const statistics = [
    {
        number: "50+",
        label: "Projects Completed"
    },
    {
        number: "6+",
        label: "Years of Experience"
    },
    {
        number: "100+",
        label: "Happy Clients"
    },
    {
        number: "10+",
        label: "Team Members"
    }
];

function Stats() {
    return (
        <section
            className="stats"
            aria-label="Urban Way Builders business statistics"
        >
            <div className="stats-container">
                {statistics.map((stat) => (
                    <div className="stat-card" key={stat.label}>
                        <h2>{stat.number}</h2>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stats;
