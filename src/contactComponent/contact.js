import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
    return (
        <div className={styles.contactComponent}>
            <h1 className={styles.title}>Contact Me</h1>
            <form action="https://formspree.io/email@domain.tld" method="POST">
                <input type="text" />
            </form>


        </div>
    )
}

export default Contact;