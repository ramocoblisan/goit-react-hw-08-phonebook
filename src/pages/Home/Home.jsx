import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome!  
      </h1>
      <h2> Please log in to access the contact list.</h2>
      <h2>If you don't have an account yet, please register in.</h2>
     
    </div>
  );
}
