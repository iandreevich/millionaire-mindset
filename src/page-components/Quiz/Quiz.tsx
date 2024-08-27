'use client';

import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';

import QuizStart from './QuizStart/QuizStart';
import { IQuestion, IQuestionOption } from './types';

const QuizEnd = dynamic(() => import('./QuizEnd/QuizEnd'), { ssr: false });
const QuizGame = dynamic(() => import('./QuizGame/QuizGame'), { ssr: false });

interface IQuizProps {
  questions: IQuestion[];
}

function Quiz({ questions }: IQuizProps) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(null);
  const [selectedOptionsIds, setSelectedOptionsIds] = useState<IQuestionOption['id'][]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [wonScore, setWonScore] = useState<number | null>(null);

  const startQuiz = (): void => {
    setWonScore(null);
    setSelectedOptionsIds([]);
    setShowResult(false);

    setActiveQuestionIndex(0);
  };

  const activeQuestion: IQuestion | null = useMemo(() => (typeof activeQuestionIndex === 'number' ? questions[activeQuestionIndex] : null), [activeQuestionIndex]);

  const processResult = (optionsIds: IQuestionOption['id'][], questionIndex: number): void => {
    setShowResult(true);
    const isAllAnswersCorrect: boolean = optionsIds.every(id => activeQuestion?.correctOptionsIds.includes(id));

    if (isAllAnswersCorrect) {
      const nextQuestionIndex: number | null = questionIndex + 1 > (questions.length - 1)
        ? null
        : questionIndex + 1;

      if (nextQuestionIndex) {
        setActiveQuestionIndex(nextQuestionIndex);
        setSelectedOptionsIds([]);
        setShowResult(false);
      } else {
        setWonScore(questions[questionIndex].prizeAmount);
      }
    } else {
      setWonScore(questionIndex === 0 ? 0 : questions[questionIndex - 1].prizeAmount);
    }
  };

  const handleSelectedOption = (optionId: IQuestionOption['id']): void => {
    const selectedIds = [...selectedOptionsIds, optionId];
    setSelectedOptionsIds(selectedIds);

    if (activeQuestion?.correctOptionsIds.length === selectedIds.length) {
      // Show result for the question
      setTimeout(() => setShowResult(true), 2000);

      // Process result and move to the next question
      setTimeout(() => processResult(selectedIds, activeQuestionIndex as number), 3000);
    }
  };

  if (activeQuestionIndex === null) {
    return <QuizStart startQuiz={startQuiz} />;
  }

  if (typeof wonScore === 'number') {
    return (
      <QuizEnd
        score={wonScore as number}
        restartQuiz={startQuiz}
      />
    );
  }

  if (typeof activeQuestionIndex === 'number' && activeQuestion) {
    return (
      <QuizGame
        activeQuestion={activeQuestion}
        activeQuestionIndex={activeQuestionIndex}
        rewards={questions.map((question: IQuestion) => question.prizeAmount)}
        selectedOptionsIds={selectedOptionsIds}
        handleSelectedOption={handleSelectedOption}
        showResult={showResult}
      />
    );
  }

  return null;
}

export default Quiz;
