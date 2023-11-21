import React from 'react'
import s from '../Footer/Footer.module.css'
import GoogleMap from './GoogleMap/GoogleMap'
import istaImage from '../../media/image_4.png'
import whatsappImg from '../../media/image_5.png'



export default function Footer() {
    return (
        <div className={s.wrapper}>
            <div className={s.text_container}>
                <div>
                    <h1>Contact</h1>
                    <p className={s.number}> <a href="+49 999 999 99 99"> +49 999 999 99 99</a></p>
                    <div className={s.social_media_content}>
                        <div className={s.icon}>
                            <a href="https://www.instagram.com">
                                <img src={istaImage} alt="inatagram" />

                            </a>
                            <p>Instagram</p>
                        </div>
                        <div className={s.icon}>
                            <a href="https://www.whatsapp.com">
                                <img src={whatsappImg} alt="whatsapp" />
                            </a>
                            <p>WhatsApp</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>Address</h1>
                    <p className={s.strasse}><a href="Linkstraße 2, 8 OG, 10785">Linkstraße 2, 8 OG, 10785,</a></p>
                    <p className={s.strasse}>Berlin, Deutschland</p>
                    <p className={s.hours}>Working Hours:</p>
                    <p className={s.time}>24 hours a day</p>
                </div>
            </div>
            <div className={s.google}>
                <GoogleMap />
            </div>
        </div>
    )
}
