import {Component, OnInit, ViewChild} from '@angular/core';
import {HeiService} from "../../../services/hei.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Candidature} from "../../../models/candidature";
import {ContactPerson} from "../../../models/contact-person";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {cilCheckAlt, cilX} from "@coreui/icons";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-admin-details-enrollment',
  templateUrl: './admin-details-enrollment.component.html',
  styleUrls: ['./admin-details-enrollment.component.scss']
})
export class AdminDetailsEnrollmentComponent implements OnInit {
  icons = { cilCheckAlt,cilX };
  cand!:Candidature;
  ListCand:Candidature[]=[];
  candc!:Candidature;
  id!:number;
  idc!:number
  dataSource = new MatTableDataSource<Candidature>(this.ListCand);
  columnsToDisplay =['details','contactPerson','quiz','quizPass','preselected','confirmed','confirmationd','receivingInst','sendingInst','city','country'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _liveAnnouncer: LiveAnnouncer, private _service: HeiService, private route: ActivatedRoute, private _router: Router) { }

  // confirmSelectedCand(value: number) {
  //   this.idc=Number(value);
  //   this._service.getCandidature(this.idc).subscribe((data)=>{
  //     this.candc=<Candidature>data;
  //     this._service.confirmCandidature(this.cand.id)
  //
  //     }
  //   )
  //   this.newItemEvent.emit(this.selectedcp.cpemail);
  // }

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get("id"));
    this._service.getCandidature(this.id).subscribe((data)=>{
      this.cand=<Candidature>data;
      this._service.getStudentCandidatures(this.cand).subscribe(e=>{
        this.ListCand=e;
        this.dataSource=new MatTableDataSource<Candidature>(this.ListCand);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
      })
      })
  }
  ConfirmStudent(idCand: number) {
    this._service.getCandidature(idCand).subscribe(e=>{
      this.cand=<Candidature>e;
      this._service.confirmStudent(this.cand).subscribe()
    })
    setTimeout(() => this.ngOnInit(), 2500)
  }
  PreselectStudent(idCand: number) {
    this._service.getCandidature(idCand).subscribe(e=>{
      this.cand=<Candidature>e;
      this._service.preselectStudent(this.cand).subscribe()
    })
    setTimeout(() => this.ngOnInit(), 2500)
  }
  removeConfirmation(idCand: number) {
    this._service.getCandidature(idCand).subscribe(e=>{
      this.cand=<Candidature>e;
      this._service.removeConfirmation(this.cand).subscribe()
    })
    setTimeout(() => this.ngOnInit(), 2500)
  }
  removeSelection(idCand: number) {
    this._service.getCandidature(idCand).subscribe(e=>{
      this.cand=<Candidature>e;
      this._service.removeSelection(this.cand).subscribe()
    })
    setTimeout(() => this.ngOnInit(), 2500)
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  enrollmentDetails(id:number){
    this._router.navigate(['/admin/showconfpres/detailsenroll/'+id]).then(() => {
      window.location.reload();
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
