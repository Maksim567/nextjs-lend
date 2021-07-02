import React from 'react';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from '../../components/organisms';
import { About, Hero, Integrations, Pricings, Reviews } from './components';
import useStyles from './style';

const Lending = () => {

  const classes = useStyles();

  return (
    <div>
      <Hero data-aos='fade-up' className={classes.hero} />
      <SectionAlternate className={classes.sectionAlternate}>
        <About />
      </SectionAlternate>
      <Section>
        <Integrations />
      </Section>
      <SectionAlternate className={classes.reviewSection}>
        <Reviews />
      </SectionAlternate>
      <Section narrow>
        <Pricings />
      </Section>
      <Divider />
    </div>
  );
};

export default Lending;


