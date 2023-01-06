import React from 'react';
import styles from './index.module.less';

interface IProps {
  children: React.ReactNode;
}

const GlobalContent = (props: IProps) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default GlobalContent;
