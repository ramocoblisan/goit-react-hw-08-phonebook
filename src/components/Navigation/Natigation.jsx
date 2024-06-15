import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (

    //******Daca vrem ca pagina de Home sa apara tot timpul pe pagina, indiferent daca utilizatorul este logat sau nu******
    // <nav>
    //   <NavLink className={styles.link} to="/">
    //     Home
    //   </NavLink>
    //   {isLoggedIn && (
    //     <NavLink className={styles.link} to="/contacts">
    //       Contacts
    //     </NavLink>
    //   )}
    // </nav>

    //** Home va aparea numai daca utilizatorul nu este logat****/
    <nav>
      {!isLoggedIn && (
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink className={styles.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};