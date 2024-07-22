import { Component, OnInit } from '@angular/core';
import {Quiz} from "../../../../models/Quiz";
import {HeiService} from "../../../../services/hei.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Question} from "../../../../models/Question";
import {Answer} from "../../../../models/Answer";

@Component({
  selector: 'app-admin-enrollment-quiz-create',
  templateUrl: './admin-enrollment-quiz-create.component.html',
  styleUrls: ['./admin-enrollment-quiz-create.component.scss']
})
export class AdminEnrollmentQuizCreateComponent implements OnInit {
  id:number;
  idq:number;
  quiz:Quiz = new Quiz();
  constructor(private quizService : HeiService,  private route: ActivatedRoute, private _router: Router) {
    this.id =  Number(this.route.snapshot.paramMap.get("id"));
    this.idq =  Number(this.route.snapshot.paramMap.get("idq"));
    this.quizService.getQuiz(this.idq).subscribe((data)=>{
      if (data) {
        this.quiz = data;
      }
    })
  }

  ngOnInit(): void {
  }

  updateQuiz(){
    this.quizService.setQuiz(this.id, this.quiz).subscribe(()=>{this._router.navigate(['/admin/showconfpres/detailsenroll/'+this.id])});

  }
  addAnswer(question:Question){
    question.answers.push(new Answer())
  }
  addQuestion(quiz: Quiz){
    quiz.questions.push(new Question())
  }
  deleteQuestion(quiz:Quiz, question: Question){
    let index = quiz.questions.indexOf(question, 0);
    if (index > -1){
      quiz.questions.splice(index, 1);
    }
  }
  deleteAnswer(question:Question, answer: Answer){
    let index = question.answers.indexOf(answer, 0);
    if (index > -1){
      question.answers.splice(index, 1);
    }
  }

}
