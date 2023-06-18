import { FolderIcon } from '../../../assets/vector-images';
import styles from './user-link.module.scss';

interface UserLinkProps {
  title: string;
  url: string;
}

export default function UserLink({ title, url }: UserLinkProps) {
  return (
    <div className={styles.userLink}>
      <FolderIcon />
      <a href={url}>{title}</a>
    </div>
  );
}
