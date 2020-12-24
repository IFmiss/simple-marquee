import React, { isValidElement } from 'react';
// import PropTypes from 'prop-types';

export interface MarqueeGroupProps {
  stop?: boolean;
}

const MarqueeGroup: React.FC<MarqueeGroupProps> = ({
  stop = false,
  children
}) => {
  const renderChildren = () => {
    return React.Children.map(children, (element, index) => {
      if (isValidElement(element)) {
        return React.cloneElement(element, {
          key: index,
          stop
        });
      } else {
        return element;
      }
    }) || null;
  };

  return (
    <div>
      {renderChildren()}
    </div>
  );
};

//MarqueeGroup.propTypes = {
//	props: PropTypes.string
//};

MarqueeGroup.displayName = 'MarqueeGroup';

export default MarqueeGroup;
