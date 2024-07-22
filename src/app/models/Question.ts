import {Answer} from "./Answer";

export class Question{
  idQuestion!: number;
  question!: String;
  answers!: Answer[];

  constructor() {
    this.answers = Array<Answer>();
  }
}
