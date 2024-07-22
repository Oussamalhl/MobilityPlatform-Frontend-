import {SendingInstitution} from "./sending-institution";
import {ReceivingInstitution} from "./receiving-institution";
import {Student} from "./student";
import {Quiz} from "./Quiz";

export class Candidature {
  id!:number
  confirmed!:boolean
  preselected!:boolean
  student!:Student
  sendinginstitution!:SendingInstitution
  receivinginstitution!:ReceivingInstitution
  student_id!:number
  receivinginstitution_id!:number
  sendinginstitution_id!:number
  quiz!:Quiz
  specialty!:string


}
