export class mobility {
  constructor(proposalNumber: string,erasmusCode: string,organisationLegalName: string,city: string,country: string, rcontactPerson:number) {
    this.proposalNumber=proposalNumber
    this.erasmusCode=erasmusCode
    this.organisationLegalName=organisationLegalName
    this.city=city
    this.country=country
    this.rcontactPerson=rcontactPerson

  }

  proposalNumber:string;
  erasmusCode:string;
  organisationLegalName:string;
  city:string;
  country:string;
  rcontactPerson!:number
}
