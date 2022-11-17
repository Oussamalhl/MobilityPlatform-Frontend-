import { Component, OnInit } from '@angular/core';
import {HeiService} from "../../../services/hei.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Candidature} from "../../../models/candidature";
import {ContactPerson} from "../../../models/contact-person";

@Component({
  selector: 'app-admin-details-enrollment',
  templateUrl: './admin-details-enrollment.component.html',
  styleUrls: ['./admin-details-enrollment.component.scss']
})
export class AdminDetailsEnrollmentComponent implements OnInit {
  cand!:Candidature;
  candc!:Candidature;
  id!:number;
  idc!:number

  constructor(private _service: HeiService, private route: ActivatedRoute, private _router: Router) { }

  /*confirmSelectedCand(value: number) {
    this.idc=Number(value);
    this._service.getCandidature(this.idc).subscribe((data)=>{
      this.candc=<Candidature>data;
      this._service.confirmCandidature(this.cand.id)

      }
    )
    //this.newItemEvent.emit(this.selectedcp.cpemail);
  }*/

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get("id"));
    this._service.getCandidature(this.id).subscribe((data)=>{
      this.cand=<Candidature>data;
      }
    );


  }



}
