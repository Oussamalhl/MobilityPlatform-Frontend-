import {ContactPerson} from "./contact-person";

export class ReceivingInstitution {
  id!:number
  proposalNumber!:string;
  erasmusCode!:string;
  pic!:string;
  oid!:string;
  organisationLegalName!:string;
  street!:string;
  postalCode!:string;
  city!:string;
  country!:string;
  webpage!:string;
  contactperson!:ContactPerson
}
