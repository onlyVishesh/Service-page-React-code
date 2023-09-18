import React, { useEffect, useState } from 'react';
import "./AmbulanceTypes.css"

const AmbulanceTypes = () => {
  const [ambulanceList, setAmbulanceList] = useState([
    {
      id: 1,
      name: 'ALS',
      fullName: 'Advanced Life Support',
      detail: 'It have cardiac life support, cardiac monitors as well as a glucose-testing device.',
      features: [
        ['Defibrillator', 'More Details Coming Soon...'],
        ['Medicines', 'More Details Coming Soon...'],
        ['Stretcher', 'More Details Coming Soon...'],
        ['Nurse', 'More Details Coming Soon...'],
        ['Bandages', 'More Details Coming Soon...'],
        ['Oxygen Supply', 'More Details Coming Soon...'],
      ],
    },
    {
      id: 2,
      name: 'BLS',
      fullName: 'Basic Life Support',
      detail: 'It is used for patients with life-threatening illnesses or injuries until they can be given full medical care by advanced life support providers (paramedics, nurses, physicians).',
      features: [
        ['Medicines', 'More Details Coming Soon...'],
        ['Stretcher', 'More Details Coming Soon...'],
        ['Nurse', 'More Details Coming Soon...'],
        ['Bandages', 'More Details Coming Soon...'],
        ['Oxygen Supply', 'More Details Coming Soon...'],
        ['Defibrillator', 'More Details Coming Soon...'],
      ],
    },
    {
      id: 3,
      name: 'PTS',
      fullName: 'Patient Transport Service',
      detail: 'It is a non-emergency vehicle that transfers patients to and from hospitals.',
      features: [
        ['Stretcher', 'More Details Coming Soon...'],
        ['Nurse', 'More Details Coming Soon...'],
        ['Bandages', 'More Details Coming Soon...'],
        ['Oxygen Supply', 'More Details Coming Soon...'],
        ['Defibrillator', 'More Details Coming Soon...'],
        ['Medicines', 'More Details Coming Soon...'],
      ],
    },
    {
      id: 4,
      name: 'MA',
      fullName: 'Medium Ambulance',
      detail: 'It provides ample room for storage, and more capacity for transporting patients and larger response crew.',
      features: [
        ['Nurse', 'More Details Coming Soon...'],
        ['Bandages', 'More Details Coming Soon...'],
        ['Oxygen Supply', 'More Details Coming Soon...'],
        ['Defibrillator', 'More Details Coming Soon...'],
        ['Medicines', 'More Details Coming Soon...'],
        ['Stretcher', 'More Details Coming Soon...'],
      ],
    },
  ]);

  const [selectedAmbulance, setSelectedAmbulance] = useState(ambulanceList[0]);
  const [selectedFeature, setSelectedFeature] = useState(0);

  const handleAmbulanceClick = (ambulance) => {
    setSelectedAmbulance(ambulance);
    setSelectedFeature(0);
  };

  const handleFeatureClick = (index) => {
    setSelectedFeature(index);
  };

  return (
    <section className="ambulance-types box hidden">
      <h1 className="underline">
        <abbr title="Types of Ambulance">Types of Ambulance</abbr>
      </h1>
      <div className="ambulance-list-div">
        <section className="ambulance-list js-ambulance-list">
          {ambulanceList.map((ambulance) => (
            <figure
              key={ambulance.id}
              className={`ambulances-img js-ambulance ${
                ambulance.name === selectedAmbulance.name ? 'selected' : ''
              }`}
              data-name={ambulance.name}
              onClick={() => handleAmbulanceClick(ambulance)}
            >
              <abbr title={ambulance.name}>
                <img
                  loading="lazy"
                  src={`images/Service-images/ambulance/${ambulance.name}.webp`}
                  alt={`${ambulance.name} Ambulance image`}
                  className={`ambulance-img ${ambulance.name}-ambulance-img`}
                />
              </abbr>
              <abbr title={ambulance.name}>
                <figcaption className="ambulance-img-figcaption">
                  {ambulance.name}
                </figcaption>
              </abbr>
            </figure>
          ))}
        </section>
        <section className="ambulance-detail">
          <article>
            <h1 className="ambulance-detail-h1">{selectedAmbulance.fullName}</h1>
            <div className="selected-ambulance-img">
              <figure className="selected-ambulance-outer-figure">
                <img
                  loading="lazy"
                  src={`images/Service-images/ambulance/${selectedAmbulance.name}.webp`}
                  alt={selectedAmbulance.name}
                  className="selected-ambulance-outer-img"
                />
              </figure>
              <figure className="selected-ambulance-inner-figure">
                <img
                  loading="lazy"
                  src={`images/Service-images/ambulance/inner-${selectedAmbulance.name}.webp`}
                  alt={`${selectedAmbulance.name} interior`}
                  className="selected-ambulance-inner-img"
                />
              </figure>
            </div>
            <div className="selected-ambulance-detail">
              <p
                className="selected-ambulance-detail-p"
                dangerouslySetInnerHTML={{ __html: selectedAmbulance.detail }}
              ></p>
            </div>
            <div className="selected-ambulance-features-div">
              {selectedAmbulance.features.map((feature, index) => (
                <div
                  key={index}
                  className={`flip-card selected-ambulance-features ${
                    index === selectedFeature ? 'selected' : ''
                  }`}
                  onClick={() => handleFeatureClick(index)}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        loading="lazy"
                        src={`images/Service-images/ambulance/features/${selectedAmbulance.name}/FEATURES ${
                          index + 1
                        }.webp`}
                        alt={feature[0]}
                        className="selected-ambulance-feature-img"
                      />
                      <p className=".selected-ambulance-feature-p">{feature[0]}</p>
                    </div>
                    <div className="flip-card-back">
                      <h3>{feature[0]}</h3>
                      <br />
                      <p>{feature.slice(1).join('<br>')}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default AmbulanceTypes;
