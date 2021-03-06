import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';
import {HeroSimpleBackground, Section} from "../../../../components/organisms";
import {SectionHeader} from "../../../../components/molecules";
import BannerSvg from '../../../../assets/images/lending-assets/banner-bg.svg';

const Hero = props => {
    const { className, ...rest } = props;

    return (
        <div className={className} {...rest}>
            <HeroSimpleBackground backgroundImage={BannerSvg}>
                <Section narrow>
                    <SectionHeader
                        title={
                            <span>
                Supercharge Your Web Product's{' '}
                                <Typography color="secondary" variant="inherit" component="span">UI/UX Design</Typography>
              </span>
                        }
                        titleVariant="h3"
                        subtitle="Our mission is to help you to grow your design skills, meet and connect with professional dsigners who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."
                        ctaGroup={[
                            <Button color="primary" variant="contained" size="large">
                                Try for free
                            </Button>,
                            <Button color="secondary" variant="outlined" size="large">
                                See pricings
                            </Button>,
                        ]}
                        disableGutter
                    />
                    <Typography
                        variant="overline"
                        align="center"
                        component="p"
                        color="primary"
                    >
                        Fully featured 30-day free trial
                    </Typography>
                </Section>
            </HeroSimpleBackground>
        </div>
    );
};

Hero.propTypes = {
    /**
     * External classes
     */
    className: PropTypes.string,
};

export default Hero;
