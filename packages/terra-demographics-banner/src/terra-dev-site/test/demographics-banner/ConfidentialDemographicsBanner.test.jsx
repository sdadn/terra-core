import React from 'react';
import DemographicsBanner from '../../../DemographicsBanner';

export default () => (
  <DemographicsBanner
    id="populated-demographics"
    applicationContent={<span>St. Johns West Wing Room Cardiac Unit 253</span>}
    age={{ value: '27 Years', ariaLabel: '27 years old.' }}
    dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
    gestationalAge={{ value: 'April 11, 2020', ariaLabel: 'April 11, 2020' }}
    postMenstrualAge={{ value: 'May 13, 2020', ariaLabel: 'May 13, 2020' }}
    administrativeSex={{ value: 'M', ariaLabel: 'Male', isBirthSexMismatch: false }}
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
    preferredFirstName="John"
  />
);
