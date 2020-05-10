// define
import React from 'react'
import Container from "../../components/presentationals/Container";
import * as styles from './Footer.module.css';


const Footer: React.FC<{}> = () => {


    return (
        <footer className={styles.container}>
           <Container>
               <p className={styles.content}>Made with ♥ by valentinbourreau</p>
           </Container>
        </footer>
    )


}

export default Footer;