import React from 'react';
import cx from 'classnames';
import CockpitLayout from '../CockpitLayout';

const cellWidths = {
  100: 'l-one-whole',
  50: 'l-one-half',
  25: 'l-one-quarter',
  33.333333333333336: 'l-one-third',
  20: 'l-one-fifth',
  16.666: 'l-one-sixth',
};

const Grid = ({ onEdit, layoutPath, layoutColumns }) => (
  <div className="l-grid">
    {layoutColumns.map(({ children }, key) => (
      <div
        className={cx('l-grid-cell', cellWidths[100 / layoutColumns.length])}
        key={`gridCol-${key}`}
      >
        <CockpitLayout
          onEdit={onEdit}
          path={`${layoutPath}.columns[${key}].children`}
          data={children}
        />
      </div>
    ))}
  </div>
);

Grid.defaultProps = {
  onEdit: () => {},
  layoutPath: '',
  layoutColumns: [],
};

export default Grid;
