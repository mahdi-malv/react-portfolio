/**
 * MainButtons component.
 */
 import React from 'react';
 import { createUseStyles } from 'react-jss';
 import styles from './styles';
 
 const useStyles = createUseStyles(styles);
 
 const Me: React.FC = () => {
   const classes = useStyles();
 

 
   return (
     <div className={classes.root}>
       <img
          src={`${process.env.PUBLIC_URL}/images/me.jpg`}
          style={styles}
          alt="me"
        />
     </div>
   );
 };

 export default Me;
 