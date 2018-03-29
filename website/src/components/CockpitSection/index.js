import React from 'react';
import cx from 'classnames';
import Layout from '../CockpitLayout';

const Section = ({
  backgroundColor,
  className,
  color,
  container,
  layoutChildren,
  layoutPath,
  onEdit,
  ...rest
}) => (
  <div
    className={cx(
      className,
      'section t-smooth',
      `c-${backgroundColor}`,
      `c-${color}--color`,
      `l-container--${container}`,
      container !== 'normal' ? 'l-container' : '',
    )}
    {...rest}
  >
    <div className="narrative">
      <Layout
        onEdit={onEdit}
        path={`${layoutPath}.children`}
        data={layoutChildren}
      />
    </div>
  </div>
);

export default Section;
