import Image from 'next/image';

import Button from '@/components/Button/Button';
import styles from './QuizEnd.module.scss';

interface IQuizEndProps {
  score: number;
  restartQuiz: () => void;
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

const QuizEnd = ({ score, restartQuiz }: IQuizEndProps) => (
  <div className={styles.quizEnd}>
    <div className={styles.content}>
      <section className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src='/images/hand.svg'
          alt='like hand'
          fill
        />
      </section>
      <section className={styles.headingSection}>
        <div className={styles.scoreWrapper}>
          <p className={styles.label}>Total score:</p>
          <p className={styles.value}>{`${formatCurrency(score)} earned`}</p>
        </div>

        <Button
          onClick={restartQuiz}
          aria-label='Start the quiz again'
        >
          Try Again
        </Button>
      </section>
    </div>
  </div>
);

export default QuizEnd;
