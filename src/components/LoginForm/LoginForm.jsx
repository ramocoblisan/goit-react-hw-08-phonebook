import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.label}>
      <span className={styles.labelName}>Email</span>
        <input type="email" name="email" />
      </label>
      <label className={styles.label}>
      <span className={styles.labelName}>Password</span>
        <input type="password" name="password" />
      </label>
      <button type="submit" className={styles.button}>Log In</button>
    </form>
  );
};
