import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl, shallowWithIntl } from 'terra-enzyme-intl';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import SmallDemographicsBannerDisplay from '../../src/_SmallDemographicsBannerDisplay';

it('renders small banner that contains all valid information', () => {
  const banner = shallowWithIntl(<SmallDemographicsBannerDisplay
    applicationContent={<span className="risk-score">5%</span>}
    age={{ value: '25 Years', ariaLabel: '25 Years Old.' }}
    dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
    administrativeSex={{ value: 'Male', ariaLabel: 'Male', isBirthSexMismatch: true }}
    administrativeSexFullText="Administrative Sex"
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
    photo=""
    personName="Johnathon Doe"
    preferredFirstName="John"
    dateOfBirthLabel="DOB"
    deceasedDateLabel="Deceased"
    gestationalAgeLabel="GA"
    postMenstrualAgeLabel="PMA"
    sexMismatchFullText="Sex Mismatch"
  />);

  expect(banner).toMatchSnapshot();
});
it('correctly applies the theme context className', () => {
  const banner = mountWithIntl(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <SmallDemographicsBannerDisplay />
    </ThemeContextProvider>,
  );
  expect(banner).toMatchSnapshot();
});
