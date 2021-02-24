import React from 'react';
import styles from './Preloader.module.css';

const Preloader = (props) => {
    return <div className={styles.preloaderWrapper}>
                <img src={'./loader.svg'} className={styles.preloaderImage}/>
            </div>
}

export default Preloader;