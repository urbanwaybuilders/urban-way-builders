const statistics = [
    {
        number: "25+",
        label: "Projects Completed"
    },
    {
        number: "2+",
        label: "Years Experience"
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
        <section className="stats">

            <div className="stats-container">

                {statistics.map((stat, index) => (

                    <div className="stat-card" key={index}>

                        <h2>{stat.number}</h2>

                        <p>{stat.label}</p>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Stats;