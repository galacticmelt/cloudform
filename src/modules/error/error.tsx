import Button from '../../shared/components/button/button';
import { ErrorIconDecorated } from '../../assets/vector-images';
import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';
import styles, { errorButton } from './error.module.scss';

export default function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  let errorMessage: string | null;

  if (isRouteErrorResponse(error)) {
    console.error(error);
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else {
    errorMessage = 'Unknown error';
  }

  return (
    errorMessage && (
      <div className={styles.errorWrapper}>
        <div className={styles.error}>
          <h2 className={styles.errorTitle}>Ошибка</h2>
          <div className={styles.errorIcon}>
            <ErrorIconDecorated />
          </div>
          <h4 className={styles.errorText}>{errorMessage}</h4>
          <div className={errorButton}>
            <Button id="button-close" onClick={() => navigate(0)}>
              Закрыть
            </Button>
          </div>
        </div>
      </div>
    )
  );
}
