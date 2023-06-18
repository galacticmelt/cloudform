import React from 'react';
import Button from '../../shared/components/button/button';
import styles from './modal.module.scss';

interface ModalProps {
  isOpened: boolean;
  title: string;
  content: React.ReactNode;
  handleClose: () => void;
}

export default function Modal({ isOpened, title, content, handleClose }: ModalProps) {
  if (!isOpened) return null;
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>{title}</h2>
        <p className={styles.modalContent}>{content}</p>
        <Button id="button-to-main" onClick={handleClose}>
          На главную
        </Button>
      </div>
    </div>
  );
}
