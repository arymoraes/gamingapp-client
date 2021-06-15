import React from 'react';
import styles from './Button.module.scss';

interface Props {
    text: string,
    backgroundColor?: string,
    color?: string,
    hoverBackgroundColor?: string,
    hoverColor?: string,
    link?: string,
    fn?: string,
}

export const Button = ({ link, text, backgroundColor, color, hoverBackgroundColor, hoverColor, fn }: Props) => {
    return (
        <>
            <a href={link ? link : null}>
                <button className={styles.button} style={{
                    backgroundColor,
                    color,
                }}>
                    {text}
                </button>
            </a>
        </>
    )
}
