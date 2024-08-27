import classNames from 'classnames';
import { IQuestionOption } from '@/page-components/Quiz/types';
import styles from './QuizOption.module.scss';
import { LETTERS } from './data';

interface IQuizOptionProps {
  index: number;
  option: IQuestionOption;
  isResult: boolean;
  isSelected: boolean;
  isCorrect: boolean;
  isDisabled: boolean;
  handleChange: (optionId: IQuestionOption['id'], checked: boolean) => void;
}

const QuizOption = ({
  option, isSelected, isCorrect, isResult, isDisabled, handleChange, index,
}: IQuizOptionProps) => (
  <div className={classNames(styles.checkboxButtonContainer, {
    [styles.wrong]: isResult && !isCorrect && isSelected,
    [styles.selected]: isSelected && !isResult,
    [styles.correct]: isResult && isCorrect,
    [styles.disabled]: isDisabled,
  })}
  >
    <div className={styles.checkboxButtonBase}>
      <input
        disabled={isDisabled}
        type='checkbox'
        id={option.id.toString()}
        className={styles.checkboxButton}
        checked={isSelected}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(option.id, e.target.checked)}
      />
      <label
        htmlFor={option.id.toString()}
        className={classNames(styles.checkboxLabel)}
      >
        <span className={styles.checkboxButtonIndex}>{LETTERS[index]}</span>
        {option.text}
      </label>
    </div>
  </div>
);

export default QuizOption;
