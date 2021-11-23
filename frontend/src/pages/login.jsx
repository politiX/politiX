import React from "react";
import {navigate} from "gatsby";
import "../styles/global.css";
import * as styles from '../styles/login.module.css'

export default function Login() {

    const handleSubmit = (e) => {

        e.preventDefault()

        const formElem = document.querySelector('form')
        const formData = new FormData(formElem)

        const mail = formData.get('mail')
        const psw = formData.get('psw')

        if (mail != '' && psw != '') {
            console.log('e-mail:', mail)
            console.log('password:', psw)

        }

        navigate('/')
    }

    return (
        <div className={styles.ww}>
            <img src="/login_bg.svg" alt=""/>
            <div className={styles.w}>
                <img src="/logo.svg" alt="politiX"/>
                <form action="" onSubmit={handleSubmit}>
                    <input type="email" name="mail" placeholder='Nutzername'/>
                    <input type="password" name="psw" placeholder='Passwort'/>
                    <button type="submit">Login</button>
                </form>
                <a href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp" target="_blank">Noch kein Account?</a>
            </div>
        </div>
    );
}
