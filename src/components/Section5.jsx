import React, { useEffect } from 'react';
// import "./Section5.css";



const Section5 = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const animation = entry.target.getAttribute("data-animation");

                if (entry.isIntersecting) {
                    entry.target.classList.add("animated", `${animation}`);
                } else {
                    entry.target.classList.remove("animated", `${animation}`);
                }
            });
        });

        const animatedEls = document.querySelectorAll("[data-animation]");
        animatedEls.forEach((el) => observer.observe(el));
    }, []);
       const sectionStyle = {
        backgroundImage: `url('./images/CUSTOMER SUPPORT BACKGROUND.webp')`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundRepeat: 'no-repeat', // Adjust as needed
        // Add any other background-related styles here
    };

    return (
        <section style={sectionStyle} className="customer-support box hidden">
            {/* heading */}
            <h1 className="underline"><abbr title="Unique Customer Support">Unique Customer Support</abbr></h1>
            <div className="customer-support-div animation-group-2">
                {/* Faster Than Ever */}
                <figure className="customer-support-figure" style={{ position: 'absolute', left: '5%', top: '10%' }} data-animation="fadeInUp">
                    <img loading="lazy" src="./images/CUSTOMER SUPPORT FASTER THAN EVER  .webp" alt="FASTER THAN EVER" className="customer-support-img animates" />
                    <figcaption className="customer-support-figcaption">
                        FASTER THAN EVER
                    </figcaption>
                </figure>

                {/* Lingual Diversity */}
                <figure className="customer-support-figure" style={{ position: 'absolute', left: '80%', top: '10%' }} data-animation="fadeInUp">
                    <img loading="lazy" src="./images/CUSTOMER SUPPORT LANGUAGE .webp" alt="LINGUAL DIVERSITY" className="customer-support-img animates" />
                    <figcaption className="customer-support-figcaption">
                        LINGUAL DIVERSITY
                    </figcaption>
                </figure>

                {/* Toll Free Number */}
                <figure className="customer-support-figure" style={{ position: 'absolute', left: '42.5%', top: '40%' }} data-animation="fadeInUp">
                    <img loading="lazy" src="./images/CUSTOMER SUPPORT TOLL FREE.webp" alt="TOLL FREE NUMBER" className="customer-support-img animates" />
                    <figcaption className="customer-support-figcaption">
                        TOLL FREE NUMBER
                    </figcaption>
                </figure>

                {/* Choose the Right One */}
                <figure className="customer-support-figure" style={{ position: 'absolute', left: '5%', top: '70%' }} data-animation="fadeInUp">
                    <img loading="lazy" src="./images/CUSTOMER SUPPORT CHOOSE THE RIGHT ONE .webp" alt="CHOOSE THE RIGHT ONE" className="customer-support-img animates" />
                    <figcaption className="customer-support-figcaption">
                        CHOOSE THE RIGHT ONE
                    </figcaption>
                </figure>

                {/* Cheapest Price */}
                <figure className="customer-support-figure" style={{ position: 'absolute', left: '80%', top: '70%' }} data-animation="fadeInUp">
                    <img loading="lazy" src="./images/CUSTOMER SUPPORT CHEAPER PRICE .webp" alt="Cheaper Price" className="customer-support-img animates" />
                    <figcaption className="customer-support-figcaption" align="bottom">
                        CHEAPEST PRICE
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

export default Section5;
