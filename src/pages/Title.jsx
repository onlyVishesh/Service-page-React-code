import React from 'react';
import "./Title.css"

const Title = () => {
    return (
        <section className="title box hidden">
            <h1><abbr title="MEDICAL means AMBUvians">MEDICAL means AMBUvians</abbr></h1>
            <p>We will try to provide the best, fastest, and safest ambulance service all over INDIA</p>
            <figure className="ambulance">
                <img loading="lazy" src="./images/Service-images/service page first section.webp" alt="cover image" style={{ width: '100vw' }} />
            </figure>
        </section>
    );
};

export default Title;
