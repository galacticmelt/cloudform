import { FolderIcon } from '../../../assets/vector-images';
import { MOCK_USER_LINKS } from '../../../shared/common/constants';
import Avatar from '../avatar/avatar';
import UserLink from '../user-link/user-link';
import styles from './user-info.module.scss';

export default function UserInfo() {
  return (
    <div className={styles.userInfo}>
      <Avatar firstName="Иван" lastName="Иванов" />
      <div className={styles.nameAndLinks}>
        <h3>Иван Иванов</h3>
        <div className={styles.links}>
          <UserLink title="Telegram" url="" />
          <UserLink title="Github" url="" />
          <UserLink title="Resume" url="" />
        </div>
      </div>
    </div>
  );
}
