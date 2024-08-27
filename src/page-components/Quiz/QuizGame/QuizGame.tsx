import { useMemo } from 'react';
import QuizOption from '@/components/QuizOption/QuizOption';
import RewardProgress from '@/components/RewardProgress/RewardProgress';
import { IQuestionOption } from '../types';
import styles from './QuizGame.module.scss';
import Drawer from '@/components/Drawer/Drawer';

interface QuizGameProps {
  activeQuestion: any;
  activeQuestionIndex: number;
  rewards: number[];
  selectedOptionId: IQuestionOption['id'] | null;
  handleSelectedOption: (optionId: IQuestionOption['id']) => void;
  showResult: boolean;
}

const shuffleOptions = (options: IQuestionOption[]): IQuestionOption[] => options.sort(() => Math.random() - 0.5);

const QuizGame = ({
  activeQuestion,
  rewards,
  activeQuestionIndex,
  handleSelectedOption,
  selectedOptionId,
  showResult,
}: QuizGameProps) => {
  const options: IQuestionOption[] = useMemo(() => shuffleOptions(activeQuestion.options), [activeQuestion.options]);

  return (
    <div className={styles.quiz}>
      <div className={styles.content}>
        <p className={styles.question}>
          {activeQuestion.question}
        </p>

        <section className={styles.answers}>
          {options.map((option: IQuestionOption, index: number) => (
            <QuizOption
              key={option.id}
              option={option}
              index={index}
              handleChange={handleSelectedOption}
              isCorrect={activeQuestion.correctOptionId === option.id && !!selectedOptionId}
              isResult={showResult}
              isSelected={selectedOptionId === option.id}
              isDisabled={!!selectedOptionId}
            />
          ))}
        </section>
      </div>

      <div className={styles.smallScreenRewardsWrapper}>
        <Drawer>
          <RewardProgress
            rewards={rewards}
            activeQuestionIndex={activeQuestionIndex}
          />
        </Drawer>
      </div>

      <div className={styles.rewardsWrapper}>
        <RewardProgress
          rewards={rewards}
          activeQuestionIndex={activeQuestionIndex}
        />
      </div>
    </div>
  );
};

export default QuizGame;
