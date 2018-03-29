import React, { PureComponent } from 'react';
import upperFirst from 'lodash.upperfirst';
import isEmpty from 'is-empty';
import propTypes from 'prop-types';

// Components
import Card from '../Card';
import Heading from '../Heading';
import ProjectGrid from '../ProjectGrid';

// CockpitLayout Components
import CockpitGrid from '../CockpitGrid';
import CockpitSection from '../CockpitSection';


// available components
const components = {
  Grid: CockpitGrid,
  Section: CockpitSection,
  Heading: Heading,
  ProjectGrid: ProjectGrid,
  Card: Card,
};

class CockpitLayout extends PureComponent {
  static defaultProps = {
    path: '',
    onEdit() {},
    id: '',
    className: '',
    style: {},
  };

  static propTypes = {
    path: propTypes.string,
    onEdit: propTypes.func,
    id: propTypes.string,
    className: propTypes.string,
    style: propTypes.object,
  };

  renderComponent(layout, data) {
    const { projects } = data;
    console.log(layout);
    return (!isEmpty(layout) &&
      layout.map(
        (
          {
            component,
            children,
            columns,
            settings: { style: _, class: className, id, ...settings },
          },
          key,
        ) => {
          const Tag = components[upperFirst(component)];
          const { onEdit, path } = this.props;

          if (!Tag)
            return (
              <pre key={`comp-${key}`}>
                CockpitLayout Component: <b>{component}</b> - Not found
                {JSON.stringify(settings, null, '  ')}
              </pre>
            );

          return (
            <div id={id} className={className} key={`comp-${component}-${key}`}>
              <Tag
                key={`comp-${component}-${key}`}
                className={className}
                {...settings}
                layoutChildren={children}
                layoutColumns={columns}
                projects={projects}
              />
            </div>
          );
        },
      )
    );
  }

  render() {
    const { layout, data } = this.props;
    if (!layout) return <div />;

    return <div>{this.renderComponent(layout, data)}</div>;
  }
}

export default CockpitLayout;
