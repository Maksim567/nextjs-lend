import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import {SectionHeader} from "../../../../components/molecules";
import {Image, LearnMoreLink} from "../../../../components/atoms";
import useStyles from "./style";


const Integrations = props => {
    const { data, className, ...rest } = props;
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
                                title="We love to explore new ways to engage with brands and reach"
                                subtitle="Our mission is to help you to grow your design skills, meet and connect with professional dsigners who share your passions."
                                align="left"
                                label="100+ Integrations"
                                ctaGroup={[
                                    <LearnMoreLink
                                        title="See all integrations"
                                        href="#"
                                        variant="h6"
                                    />,
                                ]}
                                disableGutter
                                data-aos="fade-up"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} data-aos="fade-up">
                            <Image
                                src="https://assets.maccarianagency.com/the-front/illustrations/progressive-app.svg"
                                alt="Integrations"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

Integrations.propTypes = {
    /**
     * External classes
     */
    className: PropTypes.string,
    /**
     * data to be rendered
     */
    data: PropTypes.array.isRequired,
};

export default Integrations;
