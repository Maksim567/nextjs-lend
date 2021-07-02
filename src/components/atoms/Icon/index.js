import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import NoSsr from '@material-ui/core/NoSsr';
import useStyles from './style';

/**
 * Component to display the icon
 *
 * @param {Object} props
 */
const Icon = props => {
  const { fontIconClass, size, fontIconColor, className, ...rest } = props;

  const classes = useStyles();

  return (
    <NoSsr>
      <i
        className={clsx(
          'icon',
          fontIconClass,
          classes[size],
          className,
        )}
        style={{ color: fontIconColor }}
        {...rest}
      />
    </NoSsr>
  );
};

Icon.defaultProps = {
  size: 'small',
};

Icon.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * The classes of the font icon
   */
  fontIconClass: PropTypes.string.isRequired,
  /**
   * Source set for the responsive images
   */
  size: PropTypes.oneOf(['extraSmall', 'small', 'medium', 'large']),
  /**
   * Color of the icon
   */
  fontIconColor: PropTypes.string,
};

export default Icon;
