import React from 'react';
import styles from './list.less';
// import PropTypes from 'prop-types';

export interface ListProps {
  style: any
};

const List: React.FC<ListProps> = ({
  children,
  style
}) => {
  return (
    <div style={style} className={styles.list}>
      {children ?? 'HELLO WORLD'}
    </div>
  );
};

//List.propTypes = {
//	props: PropTypes.string
//};

export default List;
