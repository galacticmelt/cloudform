import React from 'react';
import styles from './avatar.module.scss';
import { stringAvatar } from '../../../shared/common/helpers';

interface AvatarProps {
  firstName: string;
  lastName: string;
}

export default function Avatar({ firstName, lastName }: AvatarProps) {
  return (
    <div className={styles.avatar}>
      <span>{stringAvatar(firstName, lastName)}</span>
    </div>
  );
}
