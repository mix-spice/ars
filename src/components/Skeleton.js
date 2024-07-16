import React from 'react';
import styles from '../pages/styles/Skeleton.module.css'; // Adjust the import path based on your file structure

const Skeleton = ({ type }) => {
  const classes = `${styles.skeleton} ${styles[type]}`;

  return (
    <div className={classes}></div>
  );
};

export default Skeleton;
