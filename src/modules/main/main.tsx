import UserInfo from './user-info/user-info';
import styles from './main.module.scss';
import MainForm from './main-form/main-form';

export default function Main() {
  return (
    <div className={styles.mainWrapper}>
      <UserInfo />
      <div className={styles.divideLine} />
      <MainForm />
    </div>
  );
}
