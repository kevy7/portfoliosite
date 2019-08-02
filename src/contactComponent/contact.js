import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
    return (
        <div className={styles.contactComponent}>
            <h1 className={styles.title}>Contact Me</h1>

            <form className={styles.contactForm} action="https://formspree.io/email@domain.tld" method="POST">

                <div className={styles.formComponent}>
                    <label for="userEmail">Email</label>
                    <input className={styles.userInputs} type="text" id="userEmail" />
                </div>

                <div className={styles.formComponent}>
                    <label for="userName">Name</label>
                    <input className={styles.userInputs} type="text" id="userName" />
                </div>

                <div className={styles.formComponent}>
                    <label for="userMessage">Message</label>
                    <textarea className={styles.userMessage} rows="10" id="userMessage" />
                </div>

                <div className={styles.sendComponent}>
                    <button className={styles.sendButton}>Send</button>
                </div>


            </form>


        </div>
    )
}

export default Contact;