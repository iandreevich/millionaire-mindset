'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

import QuizStart from './QuizStart/QuizStart';
import { IQuestion, IQuestionOption } from './types';

const QuizEnd = dynamic(() => import('./QuizEnd/QuizEnd'), { ssr: false });
const QuizGame = dynamic(() => import('./QuizGame/QuizGame'), { ssr: false });

interface IQuizProps {
  questions: IQuestion[];
}

function Quiz({ questions }: IQuizProps) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<IQuestionOption['id'] | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [wonScore, setWonScore] = useState<number | null>(null);

  const startQuiz = (): void => {
    setWonScore(null);
    setSelectedOptionId(null);
    setShowResult(false);

    setActiveQuestionIndex(0);
  };

  const processResult = (optionId: IQuestionOption['id'], questionIndex: number): void => {
    setShowResult(true);
    const isCorrectAnswer: boolean = questions[questionIndex].correctOptionId === optionId;

    if (isCorrectAnswer) {
      const nextQuestionIndex: number | null = questionIndex + 1 > (questions.length - 1)
        ? null
        : questionIndex + 1;

      if (nextQuestionIndex) {
        setActiveQuestionIndex(nextQuestionIndex);
        setSelectedOptionId(null);
        setShowResult(false);
      } else {
        setWonScore(questions[questionIndex].prizeAmount);
      }
    } else {
      setWonScore(questionIndex === 0 ? 0 : questions[questionIndex - 1].prizeAmount);
    }
  };

  const handleSelectedOption = (optionId: IQuestionOption['id']): void => {
    setSelectedOptionId(optionId);

    // Show result for the question
    setTimeout(() => setShowResult(true), 2000);

    // Process result and move to the next question
    setTimeout(() => processResult(optionId, activeQuestionIndex as number), 3000);
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

  if (typeof activeQuestionIndex === 'number') {
    return (
      <QuizGame
        activeQuestion={typeof activeQuestionIndex === 'number' ? questions[activeQuestionIndex] : null}
        activeQuestionIndex={activeQuestionIndex}
        rewards={questions.map((question: IQuestion) => question.prizeAmount)}
        selectedOptionId={selectedOptionId}
        handleSelectedOption={handleSelectedOption}
        showResult={showResult}
      />
    );
  }

  return null;
}

export default Quiz;
