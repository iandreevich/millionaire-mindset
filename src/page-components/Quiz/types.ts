export interface IQuestionOption {
  id: number;
  text: string;
}

export interface IQuestion {
  id: number;
  question: string;
  options: IQuestionOption[];
  correctOptionsIds: number[];
  prizeAmount: number;
}
