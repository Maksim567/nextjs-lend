import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Card, CardContent } from '@material-ui/core';
import useStyles from './style';

/**
 * Component to display the basic card
 *
 * @param {Object} props
 */
const CardBase = props => {
  const {
    withShadow,
    noShadow,
    noBorder,
    noBg,
    liftUp,
    children,
    align,
    className,
    cardContentProps,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <Card
      className={clsx(
        'card-base',
        classes.root,
        withShadow ? classes.withShadow : {},
        noShadow ? classes.noShadow : {},
        noBorder ? classes.noBorder : {},
        noBg ? classes.noBg : {},
        liftUp ? classes.liftUp : {},
        className,
      )}
      {...rest}
    >
      <CardContent
        className={clsx('card-base__content', classes.content, classes[align])}
        {...cardContentProps}
      >
        {children}
      </CardContent>
    </Card>
  );
};

CardBase.defaultProps = {
  align: 'center',
  cardContentProps: {},
};

CardBase.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * The children content of the basic card
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether to show custom shadow
   */
  withShadow: PropTypes.bool,
  /**
   * Whether to render the card without shadow
   */
  noShadow: PropTypes.bool,
  /**
   * Whether to hide the card borders
   */
  noBorder: PropTypes.bool,
  /**
   * Whether to show transparent background
   */
  noBg: PropTypes.bool,
  /**
   * Whether to lift up on hover
   */
  liftUp: PropTypes.bool,
  /**
   * The content alignment
   */
  align: PropTypes.oneOf(['left', 'right', 'center']),
  /**
   * Additional props to pass to the CardContent component
   */
  cardContentProps: PropTypes.object,
};

export default CardBase;
