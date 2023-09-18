import React, { useState, useEffect } from 'react';
import "./Quotes.css"


const quotes = [
  "Future holds transformative services and technologies that will reshape the world.",
  "At Ambuvians, healthcare is not just a service, but a promise of well-being.",
  "Caring today for a healthier tomorrow, AMBUvians redefines healthcare."
];

function Quotes() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="quote box hidden">
      <div className="video">
        <img loading="lazy" src="videos/video.gif" alt="Quotes" className="gif" />
      </div>

      <div className="text-box text-overlay">
        <h1 className="text-box-h">{quotes[quoteIndex]}</h1>
      </div>
    </section>
  );
}

export default Quotes;
