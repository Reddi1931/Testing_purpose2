import React, { useState } from 'react';

const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative bg-white p-6 rounded-lg shadow-lg w-full text-center mt-10 transition-transform transform ${
        isExpanded ? 'scale-105' : ''
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${service.backgroundImage})` }}
      ></div>
      <div className="relative z-10">
        <div className="text-5xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p>{service.shortDescription}</p>
        {isExpanded && (
          <div className="mt-4">
            <p>{service.description}</p>
            <ul className="list-disc list-inside text-left mx-auto max-w-xl">
              {service.features.map((feature, idx) => (
                <li key={idx} className="mb-2">{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
