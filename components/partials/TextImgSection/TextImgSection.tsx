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
    backgroundSize?: number,
    buttons?: ButtonInterface[],
}

export const TextImgSection = ({title, text, img, buttons, backgroundColor, backgroundSize, color}: Props) => {
    return (
        <section className={styles.main} style={{
            backgroundColor,
            color,
        }}>
            {img ? 
                <div className={styles.image} style={{
                    background: `url(http://localhost:3000/${img})`,
                    backgroundSize: backgroundSize ? `${backgroundSize}%` : '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
                </div>
            : null}
            <section className={styles.textSection}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.text}>
                    {text}
                </div>
                <section className={styles.buttons}>
                    <Button text="Login"></Button>
                    <Button text="Signup" color="rgb(219, 216, 31)" backgroundColor="black"></Button>
                    { buttons ?
                        buttons.map((button: ButtonInterface) => {
                            // return button
                        })
                    : null}
                </section>
            </section>
        </section>
    )
}
