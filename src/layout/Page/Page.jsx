import { NavLink, Outlet } from "react-router-dom";
import styles from "./Page.module.css";
import cn from 'classnames';

export default function Layout() {

    return <div className={styles['layout']}>
      <div className={styles['navigation']}>
        <NavLink to='/' className={({ isActive }) => cn(styles['link'], {
            [styles.active]: isActive
        })}>Main</NavLink>
        <NavLink to='/graphic' className={({ isActive }) => cn(styles['link'], {
            [styles.active]: isActive
        })}>Graphic</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
}