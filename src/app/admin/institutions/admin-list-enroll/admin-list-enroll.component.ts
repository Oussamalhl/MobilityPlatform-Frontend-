import {Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Hei} from "../../../models/hei";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from '@angular/router';
import {ReceivingInstitution} from "../../../models/receiving-institution";
import {HeiService} from "../../../services/hei.service";
import {Candidature} from "../../../models/candidature";
import {Observable, Subscription} from "rxjs";
import {SendingInstitution} from "../../../models/sending-institution";
import {Student} from "../../../models/student";
import {ContactPerson} from "../../../models/contact-person";
import {Countries} from "../../../models/countries";
import {countries} from "../../../models/country-data-store";

@Component({
  selector: 'app-admin-list-enroll',
  templateUrl: './admin-list-enroll.component.html',
  styleUrls: ['./admin-list-enroll.component.css']
})
export class AdminListEnrollComponent implements OnInit {
  proposalNumber!: string;
  erasmusCode!: string;
  pic!: string;
  oid!: string;
  organisationLegalName!: string;
  street!: string;
  postalCode!: string;
  city!: string;
  country!: string;

  isLoading = false;
  isSending = false;
  sent = false;


  form = new FormGroup({
    proposalNumber: new FormControl(""),
    erasmusCode: new FormControl(""),
    pic: new FormControl(""),
    oid: new FormControl(""),
    organisationLegalName: new FormControl(),
    street: new FormControl(),
    postalCode: new FormControl(),
    city: new FormControl(),
    country: new FormControl(),


    sname: new FormControl,
    sfacOrDep: new FormControl,
    serasmusCode: new FormControl,
    saddress: new FormControl,
    scountry: new FormControl,


    firstName: new FormControl(),
    lastName: new FormControl(),
    nationality: new FormControl(),
    studyCycle: new FormControl(),
    educationField: new FormControl(),
    email: new FormControl(),
    sex: new FormControl(),
    birthdate: new FormControl(),

    scpname: new FormControl(),
    scpemail: new FormControl(),
    scpphone: new FormControl(),

    rcpname: new FormControl(),
    rcpemail: new FormControl(),
    rcpphone: new FormControl()


  });
  hei!: Hei
  rreceivinginstitution: ReceivingInstitution = new ReceivingInstitution();

  candidature: Candidature = new Candidature();
  student: Student = new Student();
  sendinginstitution: SendingInstitution = new SendingInstitution();
  scontactperson: ContactPerson = new ContactPerson();
  rcontactperson: ContactPerson = new ContactPerson();
  countries: any = countries;
  contactpersons: any = this._service.getAllContactPerson();
  selectedcp: ContactPerson = new ContactPerson();
  specialty:string=""
  studyCycles:string[]=["Preparatoire","Engineering","Business"]

  id!: number

  //@Output() newItemEvent = new EventEmitter<string>();

  selectedContactPerson(value: string) {
    this.id = Number(value);
    this._service.getContactPerson(this.id).subscribe((data) => {
        this.selectedcp = <ContactPerson>data;
      }
    )
    //this.newItemEvent.emit(this.selectedcp.cpemail);
  }

  //console.log(contactpersons);


  @ViewChild('dialogRef', {static: true}) dialogRef!: TemplateRef<any>;

  constructor(private _service: HeiService, private route: ActivatedRoute, private dialog: MatDialog, private _router: Router) {
  }


  openDialog() {
    let dialog = this.dialog.open(this.dialogRef);
  }

  ngOnInit(): void {

    this.rreceivinginstitution.proposalNumber = String(this.route.snapshot.paramMap.get("proposalNumber"));
    this.rreceivinginstitution.erasmusCode = String(this.route.snapshot.paramMap.get("erasmusCode"));
    this.rreceivinginstitution.pic = String(this.route.snapshot.paramMap.get("pic"));
    this.rreceivinginstitution.oid = String(this.route.snapshot.paramMap.get("oid"));
    this.rreceivinginstitution.organisationLegalName = String(this.route.snapshot.paramMap.get("organisationLegalName"));
    this.rreceivinginstitution.street = String(this.route.snapshot.paramMap.get("street"));
    this.rreceivinginstitution.postalCode = String(this.route.snapshot.paramMap.get("postalCode"));
    this.rreceivinginstitution.city = String(this.route.snapshot.paramMap.get("city"));
    this.rreceivinginstitution.country = String(this.route.snapshot.paramMap.get("country"));


    this.form.controls['proposalNumber'].setValue(this.rreceivinginstitution.proposalNumber);
    this.form.controls['erasmusCode'].setValue(this.rreceivinginstitution.erasmusCode);
    this.form.controls['pic'].setValue(this.rreceivinginstitution.pic);
    this.form.controls['oid'].setValue(this.rreceivinginstitution.oid);
    this.form.controls['organisationLegalName'].setValue(this.rreceivinginstitution.organisationLegalName);
    this.form.controls['street'].setValue(this.rreceivinginstitution.street);
    this.form.controls['postalCode'].setValue(this.rreceivinginstitution.postalCode);
    this.form.controls['city'].setValue(this.rreceivinginstitution.city);
    this.form.controls['country'].setValue(this.rreceivinginstitution.country);
    this.form.controls['scountry'].setValue('Tunisia');

    this.id = Number(this.route.snapshot.paramMap.get("rcp"))
    console.log("rcp id: "+this.id)

    this._service.getContactPerson(this.id).subscribe((data) => {
        this.rcontactperson = <ContactPerson>data;
        console.log("rcp: "+this.rcontactperson.name)
        this.form.controls['rcpname'].setValue(this.rcontactperson.name);
        this.form.controls['rcpemail'].setValue(this.rcontactperson.cpemail);
        this.form.controls['rcpphone'].setValue(this.rcontactperson.phone);

      }
    )
    this.specialty = this.route.snapshot.paramMap.get("specialty") as string

  }

  onSubmit() {

    this.isSending = true;
    let dialog = this.dialog.open(this.dialogRef);

    this.candidature.receivinginstitution = this.rreceivinginstitution
    console.log(this.candidature.receivinginstitution);

    this.student.firstName = this.form.value?.firstName ? this.form.value?.firstName : "";
    this.student.lastName = this.form.value?.lastName ? this.form.value?.lastName : "";
    this.student.nationality = this.form.value?.nationality ? this.form.value?.nationality : "";
    this.student.studyCycle = this.form.value?.studyCycle ? this.form.value?.studyCycle : "";
    this.student.educationField = this.form.value?.educationField ? this.form.value?.educationField : "";
    this.student.email = this.form.value?.email ? this.form.value?.email : "";
    this.student.sex = this.form.value?.sex ? this.form.value?.sex : "";
    this.student.birthDate = this.form.value?.birthdate ? this.form.value?.birthdate : new Date();


    /*this.candidature.receivinginstitution.proposalNumber = this.form.value?.proposalNumber ? this.form.value?.proposalNumber : "";
    this.candidature.receivinginstitution.erasmusCode = this.form.value?.erasmusCode ? this.form.value?.erasmusCode : "";
    this.candidature.receivinginstitution.pic = this.form.value?.pic ? this.form.value?.pic : "";
    this.candidature.receivinginstitution.oid = this.form.value?.oid ? this.form.value?.oid : "";
    this.candidature.receivinginstitution.organisationLegalName = this.form.value?.organisationLegalName ? this.form.value?.organisationLegalName : "";
    this.candidature.receivinginstitution.street = this.form.value?.street ? this.form.value?.street : "";
    this.candidature.receivinginstitution.postalCode = this.form.value?.postalCode ? this.form.value?.postalCode : "";
    this.candidature.receivinginstitution.city = this.form.value?.city ? this.form.value?.city : "";
    this.candidature.receivinginstitution.country = this.form.value?.country ? this.form.value?.country : "";*/

    this.rcontactperson.name = this.form.value?.rcpname ? this.form.value?.rcpname : "";
    this.rcontactperson.cpemail = this.form.value?.rcpemail ? this.form.value?.rcpemail : "";
    this.rcontactperson.phone = this.form.value?.rcpphone ? this.form.value?.rcpphone : "";


    this.sendinginstitution.serasmusCode = this.form.value?.serasmusCode ? this.form.value?.serasmusCode : "";
    this.sendinginstitution.sname = this.form.value?.sname ? this.form.value?.sname : "";
    this.sendinginstitution.scountry = this.form.value?.scountry ? this.form.value?.scountry : "";
    this.sendinginstitution.sfacOrDep = this.form.value?.sfacOrDep ? this.form.value?.sfacOrDep : "";
    this.sendinginstitution.saddress = this.form.value?.saddress ? this.form.value?.saddress : "";

    /*this.scontactperson.name = this.form.value?.scpname ? this.form.value?.scpname : "";
    this.scontactperson.cpemail = this.form.value?.scpemail ? this.form.value?.scpemail : "";
    this.scontactperson.phone = this.form.value?.scpphone ? this.form.value?.scpphone : "";*/

    this.candidature.student = this.student;
    this.rreceivinginstitution.contactperson = this.rcontactperson;
    //this.sendinginstitution.contactperson = this.selectedcp;
    this.candidature.receivinginstitution = this.rreceivinginstitution;
    this.candidature.sendinginstitution = this.sendinginstitution;
    this.candidature.specialty = this.specialty;


    this._service.addCandidature(this.candidature).subscribe(
      (res) => {
        console.log(res);
        this.isSending = false;
        this.sent = true;
        dialog.addPanelClass('success-dialog');
      },
      (err) => {
        console.log(err);
        this.isSending = false;
        this.sent = false;
        dialog.addPanelClass('fail-dialog')
      }
    )
    this._router.navigateByUrl("admin");


  }

}
