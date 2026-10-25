const processSteps = [
    {
        number: "01",
        title: "Consultation",
        description:
            "We understand your requirements, budget and construction goals."
    },
    {
        number: "02",
        title: "Planning",
        description:
            "We plan the project and coordinate the required construction activities."
    },
    {
        number: "03",
        title: "Construction",
        description:
            "Our team executes the project with focus on quality and workmanship."
    },
    {
        number: "04",
        title: "Completion",
        description:
            "We complete the project and review the work with the customer."
    }
];

function Process() {

    return (
        <section className="process">

            <div className="section-title">

                <h2>How We Build Your Dream</h2>

                <p>
                    A simple and transparent approach to construction.
                </p>

            </div>

            <div className="process-container">

                {processSteps.map((step, index) => (

                    <div className="process-card" key={index}>

                        <span className="process-number">
                            {step.number}
                        </span>

                        <h3>{step.title}</h3>

                        <p>{step.description}</p>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Process;