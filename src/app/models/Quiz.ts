import {Question} from "./Question";

export class Quiz {
  quizId!: number;
  requiredToSuccess!: number;
  questions!: Question[];
  constructor() {
    this.questions = Array<Question>();
    this.requiredToSuccess = 50;
  }

}
