import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Quiz from '@/page-components/Quiz/Quiz';
import { IQuestion } from '@/page-components/Quiz/types';
import data from '@/quiz.json';

import { createMetadataSet } from './createMetadataSet';

export const generateMetadata = (): Metadata => createMetadataSet({ title: 'Quiz', description: 'Who wants to be a millionaire?' }, 'https://millionaire-mindset.vercel.app/');

const getQuizData = (): IQuestion[] => {
  if (data?.questions?.length) {
    return data?.questions;
  } else {
    notFound();
  }
};

export default function Home() {
  const questions: IQuestion[] = getQuizData();

  return (
    <Quiz questions={questions} />
  );
}
