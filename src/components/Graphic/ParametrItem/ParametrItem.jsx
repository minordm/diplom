import cn from 'classnames';
import styles from './ParametrItem.module.css';

export default function ParametrItem({ name, value, unit, isHead }) {

    return (
        <div className={cn(styles["parametr-item"], {
            [styles['parametr-head']]: isHead
        })}>
            <div className={cn(styles["parametr-item__name"], {
                [styles['parametr-head__name']]: isHead
            })}>{ name }</div>
            <div className={styles["parametr-item__value"]}>{ value }</div>
            <div className={styles["parametr-item__unit"]}>{ unit }</div>
        </div>
    );
};