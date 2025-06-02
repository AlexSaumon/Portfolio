import React from 'react';
import '../App.scss';
import serviceData from '../Data/Service.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';

function ServiceSection() {
  const iconMap = {
    faDesktop: faDesktop,
    faWrench: faWrench,
    faAccessibleIcon: faAccessibleIcon,
  };

  return (
    <section className="service-container">
      {serviceData.map((item, index) => (
        <div key={index} className="service-description">
          <div className="service-title">
            <FontAwesomeIcon className="service-icon" icon={iconMap[item.icon]} />
            <h3>{item.title}</h3>
          </div>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}

export default ServiceSection;
