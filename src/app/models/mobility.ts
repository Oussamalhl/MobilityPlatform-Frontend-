export class mobility {
  constructor(specialty: string, proposalNumber: string, erasmusCode: string, organisationLegalName: string, city: string, country: string, rcontactPerson: number) {
    this.proposalNumber = proposalNumber
    this.erasmusCode = erasmusCode
    this.organisationLegalName = organisationLegalName
    this.city = city
    this.country = country
    this.rcontactPerson = rcontactPerson
    this.specialty = specialty
  }

  proposalNumber: string;
  erasmusCode: string;
  organisationLegalName: string;
  city: string;
  country: string;
  rcontactPerson!: number
  specialty!: string
}
