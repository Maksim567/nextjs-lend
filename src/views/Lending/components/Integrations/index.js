import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { SectionHeader } from '../../../../components/molecules';
import { Image, LearnMoreLink } from '../../../../components/atoms';
import useStyles from './style';
import ProgressiveSVG from 'assets/images/lending-assets/progressive-app.svg';

const Integrations = props => {


  const {className, ...rest } = props;
    const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} md={6}>
              <SectionHeader
                title='We love to explore new ways to engage with brands and reach'
                subtitle='Our mission is to help you to grow your design skills, meet and connect with professional who share your passions.'
                align='left'
                label='100+ Integrations'
                ctaGroup={[
                  <LearnMoreLink
                    title='See all integrations'
                    href='#'
                    variant='h6'
                  />,
                ]}
                disableGutter
                data-aos='fade-up'
              />
            </Grid>
            <Grid item xs={12} md={6} data-aos='fade-up'>
              <Image
                src= {ProgressiveSVG}
                alt='Integrations'
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};


export default Integrations;
