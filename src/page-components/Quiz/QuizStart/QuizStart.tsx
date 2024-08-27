import Image from 'next/image';

import Button from '@/components/Button/Button';

import styles from './QuizStart.module.scss';

interface IQuizStartProps {
  startQuiz: () => void;
}

const QuizStart = ({ startQuiz }: IQuizStartProps) => (
  <div className={styles.quizStart}>
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
        <h1 className={styles.title}>Who wants to be a millionaire?</h1>
        <Button
          aria-label='start quiz'
          onClick={startQuiz}
        >
          Start
        </Button>
      </section>
    </div>
  </div>
);

export default QuizStart;
