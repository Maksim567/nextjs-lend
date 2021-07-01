import React from 'react';
import PropTypes from 'prop-types';
import {SectionHeader} from "../../../../components/molecules";
import useStyles from "./style";


const Reviews = props => {

    const classes = useStyles();

    return (
        <>
            <SectionHeader
                title={
                    <span className={classes.textWhite}>
            Take a look what our customers say
          </span>
                }
                subtitle={
                    <span className={classes.textWhite}>
            Take a quick glance at some of our past projects. If you would like
            to see some more great work, get in touch with us to take a look at
            our private portfolio.
          </span>
                }
                align="left"
                data-aos="fade-up"
            />
        </>
    );
};

Reviews.propTypes = {
    /**
     * External classes
     */
    className: PropTypes.string,
    /**
     * data to be rendered
     */
    data: PropTypes.array.isRequired,
};

export default Reviews;
