const services = [
    {
        title: "Residential Construction",
        description:
            "Construction of houses and residential properties based on your requirements."
    },
    {
        title: "Commercial Construction",
        description:
            "Construction solutions for commercial buildings and business spaces."
    },
    {
        title: "Building Renovation",
        description:
            "Renovation and improvement of existing buildings and spaces."
    },
    {
        title: "Construction Consultation",
        description:
            "Guidance and consultation for your construction requirements."
    }
];

function Services() {

    return (
        <section className="services" id="services">

            <div className="section-title">

                <h2>Our Services</h2>

                <p>
                    Complete construction solutions for your needs.
                </p>

            </div>

            <div className="service-container">

                {services.map((service, index) => (

                    <div className="service-card" key={index}>

                        <h3>{service.title}</h3>

                        <p>{service.description}</p>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Services;