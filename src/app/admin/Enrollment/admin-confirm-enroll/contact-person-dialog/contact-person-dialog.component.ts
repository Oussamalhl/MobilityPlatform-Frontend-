import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ContactPerson} from "../../../../models/contact-person";
import {HeiService} from "../../../../services/hei.service";
import value from "*.json";
export interface DialogData {
  id: number;
}
@Component({
  selector: 'app-contact-person-dialog',
  templateUrl: './contact-person-dialog.component.html',
  styleUrls: ['./contact-person-dialog.component.scss']
})
export class ContactPersonDialogComponent implements OnInit {

  contactPersons:ContactPerson[]=[]
  idcp!:number
  selectedContactPerson!:ContactPerson

  constructor(private _service: HeiService,
    public dialogRef: MatDialogRef<ContactPersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  getContactPerson(){
    this._service.getContactPerson(this.idcp).subscribe(e=>{
      this.selectedContactPerson=e
      //console.log("cp: "+this.selectedContactPerson.name)
    })

  }
  affectContactPerson(idCand:number){
    console.log("cp: "+this.selectedContactPerson.name)
      this._service.affectSContactPerson(idCand,this.selectedContactPerson.id).subscribe()
    setTimeout(() => window.location.reload(), 2500)

  }
  ngOnInit(): void {
    this._service.getAllContactPerson().subscribe(e=>{
      this.contactPersons=e;
    });

  }

}
