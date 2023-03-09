import styles from './Button.module.css'
import cn from 'clsx'

export const Button = ({ children, type, disabled }) => {
    return (
        <button className={cn(styles.btn, type && styles[type])} disabled={disabled || false}>
            {children}
        </button>
    )
}
