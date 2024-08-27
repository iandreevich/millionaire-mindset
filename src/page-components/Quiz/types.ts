export interface IQuestionOption {
  id: number;
  text: string;
}

export interface IQuestion {
  id: number;
  question: string;
  options: IQuestionOption[];
  correctOptionId: number;
  prizeAmount: number;
}
