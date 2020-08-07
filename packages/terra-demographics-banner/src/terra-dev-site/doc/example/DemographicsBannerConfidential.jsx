import React from 'react';
import Image from 'terra-image';
import DemographicsBanner from 'terra-demographics-banner';
import demographicsImage from '../assets/demographicsCat.jpg';

const DemographicsBannerConfidential = () => (
  <DemographicsBanner
    applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
    age={{ value: '25 Years', ariaLabel: '25 years old.' }}
    dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
    administrativeSex={{ value: 'Male', ariaLabel: 'Male', isBirthSexMismatch: false }}
    identifiers={[
      {
        label: 'MRN',
        value: '12343',
        ariaLabel: 'MRN 1 2 3 4 5',
      },
      {
        label: 'REA',
        value: '3JSDA',
        ariaLabel: 'R E A 3JSDA',
      },
    ]}
    isConfidential
    personName="Johnathon Doe"
    photo={<Image alt="My Cat" src={demographicsImage} />}
    preferredFirstName="John"
  />
);

export default DemographicsBannerConfidential;
