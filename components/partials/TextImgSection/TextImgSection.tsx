import React from 'react'
import ButtonInterface from '../../../interfaces/Button';
import { Button } from '../elements/Button/Button';
import styles from './TextImgSection.module.scss';

interface Props {
    title: string,
    text: string,
    img?: string,
    backgroundColor?: string,
    color?: string,
    buttons?: ButtonInterface[],
}

export const TextImgSection = ({title, text, img, buttons, backgroundColor, color}: Props) => {
    return (
        <section className={styles.main}>
            {img ? 
                <div className={styles.image}>
                </div>
            : null}
            <section className={styles.textSection}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.text}>
                    {text}
                </div>
                <Button text="Pre-order now"></Button>
                { buttons ?
                    buttons.map((button: ButtonInterface) => {
                        // return button
                    })
                : null}
            </section>
        </section>
    )
}
