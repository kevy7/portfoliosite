import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
    return (
        <div className={styles.contactComponent}>

            <form className={styles.contactForm} action="https://formspree.io/kvnyang503@gmail.com" method="POST">
                <h1 className={styles.title}>Contact Me</h1>

                <div className={styles.formComponent}>
                    <label for="userEmail">Email</label>
                    <input className={styles.userInputs} type="email" name="email" id="userEmail" />
                </div>

                <div className={styles.formComponent}>
                    <label for="userName">Name</label>
                    <input name="userName" className={styles.userInputs} type="text" id="userName" />
                </div>

                <div className={styles.formComponent}>
                    <label for="userMessage">Message</label>
                    <textarea name="message" placeholder="Write something in here..." className={styles.userMessage} rows="10" id="userMessage" />
                </div>

                <div className={styles.sendComponent}>
                    <button type="submit" className={styles.sendButton}>Send</button>
                </div>
            </form>

        </div>
    )
}

export default Contact;