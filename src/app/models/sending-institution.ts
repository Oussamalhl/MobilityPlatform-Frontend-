import {ContactPerson} from "./contact-person";

export class SendingInstitution {
  id!:number
  sname!:string
  sfacOrDep!:string
  serasmusCode!:string
  saddress!:string
  scountry!:string
  contactperson!:ContactPerson
}
