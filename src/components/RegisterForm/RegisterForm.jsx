import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const credentials = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    
    console.log('Submitting credentials:', credentials); 

    dispatch(register(credentials));
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.label}>
        <span className={styles.labelName}>Username</span>
        <input type="text" name="name" />
      </label>
      <label className={styles.label}>
        <span className={styles.labelName}>Email</span>
        <input type="email" name="email" />
      </label>
      <label className={styles.label}>
        <span className={styles.labelName}>Password</span>
        <input type="password" name="password" />
      </label>
      <button type="submit" className={styles.button}>Register</button>
    </form>
  );
};
