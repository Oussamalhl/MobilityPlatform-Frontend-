import {SendingInstitution} from "./sending-institution";
import {ReceivingInstitution} from "./receiving-institution";
import {Student} from "./student";

export class Candidature {
  id!:number
  student!:Student
  sendinginstitution!:SendingInstitution
  receivinginstitution!:ReceivingInstitution


}
