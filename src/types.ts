export interface Option {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
  textAr: string;
}

export interface Question {
  id: number;
  question: string;
  questionAr: string;
  options: Option[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanationDetails: string;
  explanationDetailsAr: string;
  explanationAnswer: string;
  explanationAnswerAr: string;
}
