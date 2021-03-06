import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Typography } from '@material-ui/core';
import {SectionHeader} from "../../../../components/molecules";
import {CardBase} from "../../../../components/organisms";
import {Image} from "../../../../components/atoms";
import useStyles from "./style";
import PlayIcon from "assets/images/lending-assets/play-icon.svg";
import DesignIcon from "assets/images/lending-assets/design-team.svg";

const About = props => {
    const { className, ...rest } = props;
    const classes = useStyles();

    return (
        <div className={className} {...rest}>
            <SectionHeader
                title={
                    <span>
            <Typography component="span" variant="inherit" color="primary">
              We love to explore
            </Typography>{' '}
                        new ways to engage with brands and reach
          </span>
                }
                subtitle="Our mission is to help you to grow your design skills, meet and connect with professional dsigners who share your passions."
                ctaGroup={[
                    <Button color="primary" variant="contained" size="large">
                        Try for free
                    </Button>,
                    <Button color="secondary" variant="outlined" size="large">
                        See pricings
                    </Button>,
                ]}
                data-aos="fade-up"
            />
            <CardBase withShadow liftUp variant="outlined" data-aos="fade-up">
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Grid container justify="flex-end">
                            <Image
                                className={classes.playIcon}
                                src={PlayIcon}
                                alt="Play Video"
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <Image
                                    src={DesignIcon}
                                    alt="Play Video"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardBase>
        </div>
    );
};

About.propTypes = {
    /**
     * External classes
     */
    className: PropTypes.string,
};

export default About;
