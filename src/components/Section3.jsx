import React, { useEffect } from 'react';

const Section3 = () => {
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

    return (
        <section className="how-it-works box hidden" style={{ position: 'relative' }}>
            {/* heading */}
            <h1><abbr title="How it Works">How it Works</abbr></h1>
              <section class="how-it-works-section animation-group-1">



        <figure class="how-it-works-figure" data-animation="fadeInLeft">
          <img loading="lazy" src="./images/HOW_IT_WORKS_1.webp" alt="Medical Emergency"
            class="how-it-works-img animates"/>
          <figcaption class="how-it-works-figcaption">A person having serious problem </figcaption>
        </figure>

        <figure class="arrow" data-animation="fadeInLeft">
          <img loading="lazy" src="./images/Arrow 3.svg" alt="left arrow" class="how-it-works-arrow animates"/>
        </figure>

        <figure class="how-it-works-figure" data-animation="fadeInLeft">
          <img loading="lazy" src="./images/HOW_IT_WORKS_5.webp" alt="Urgent Help" class="how-it-works-img animates"/>
          <figcaption class="how-it-works-figcaption">Need for urgent Help</figcaption>
        </figure>

        <figure class="arrow" data-animation="fadeInLeft">
          <img loading="lazy" src="./images/Arrow 3.svg" alt="left arrow" class="how-it-works-arrow animates"/>
        </figure>

        <figure class="how-it-works-figure" data-animation="fadeInLeft">
          <img loading="lazy" src="./images/HOW_IT_WORKS_2.webp" alt="Contact us" class="how-it-works-img animates"/>
          <figcaption class="how-it-works-figcaption">Contact us For Urgent Help </figcaption>
        </figure>

        <figure class="arrow" data-animation="fade">
          <img loading="lazy" src="./images/Arrow 5.svg" alt="down arrow" class="down-arrow animates"/>
        </figure>

        <figure class="how-it-works-figure" data-animation="fadeInRight">
          <img loading="lazy" src="./images/HOW_IT_WORKS_6.webp" alt="Happiness" class="how-it-works-img animates"/>
          <figcaption class="how-it-works-figcaption">Problem convert into Happiness</figcaption>
        </figure>

        <figure class="arrow" data-animation="fadeInRight">
          <img loading="lazy" src="./images/Arrow 7.svg" alt="right arrow" class="how-it-works-arrow animates"/>
        </figure>

        <figure class="how-it-works-figure" data-animation="fadeInRight">
          <img loading="lazy" src="./images/HOW_IT_WORKS_4.webp" alt="Prompt action" class="how-it-works-img animates"/>
          <figcaption class="how-it-works-figcaption">Prompt action based on the situation</figcaption>
        </figure>

        <figure class="arrow" data-animation="fadeInRight">
          <img loading="lazy" src="./images/Arrow 7.svg" alt="right arrow" class="how-it-works-arrow animates"/>
        </figure>

        <figure class="how-it-works-figure" data-animation="fadeInRight">
          <img loading="lazy" src="./images/HOW_IT_WORKS_3.webp" alt="Ambulance" class="how-it-works-img
            animates"/>
          <figcaption class="how-it-works-figcaption">Help is on the way </figcaption>
        </figure>

      </section>
        </section>
    );
};

export default Section3;
