import { Component, OnInit } from '@angular/core';
import {Quiz} from "../../../../models/Quiz";
import {ActivatedRoute, Router} from "@angular/router";
import {HeiService} from "../../../../services/hei.service";

@Component({
  selector: 'app-admin-enrollment-quiz-pass',
  templateUrl: './admin-enrollment-quiz-pass.component.html',
  styleUrls: ['./admin-enrollment-quiz-pass.component.scss']
})
export class AdminEnrollmentQuizPassComponent implements OnInit {

  idq!:number;
  id!:number;
  quiz:Quiz = new Quiz();

  constructor(private quizService : HeiService, private router : Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idq =  Number(this.route.snapshot.paramMap.get("idq"));
    this.id =  Number(this.route.snapshot.paramMap.get("id"));
    // console.log("id"+this.id)
    // console.log("idq"+this.idq)

    this.quizService.userGetQuiz(this.id).subscribe((data)=>{
      if (data) {
        this.quiz = data;
        console.log(data)
        this.quiz.questions.forEach((value,index)=>{value.answers.forEach((answer)=>{answer.correct = false})});
      }
    })
  }
  submitQuiz(){
    this.quizService.evaluateQuiz(this.id, this.quiz).subscribe((data) =>{alert("Your Score is "+data); this.router.navigate(['/admin/showconfpres/detailsenroll/'+this.id])}, ()=>{alert("Error while submitting your quiz")}, ()=>{console.log("complete");});

  }


}
