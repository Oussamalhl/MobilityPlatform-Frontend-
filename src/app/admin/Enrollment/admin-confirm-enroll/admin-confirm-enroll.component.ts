import {Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {Candidature} from "../../../models/candidature";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {HeiService} from "../../../services/hei.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import { cilCheckAlt,cilX } from '@coreui/icons';

@Component({
  selector: 'app-admin-confirm-enroll',
  templateUrl: './admin-confirm-enroll.component.html',
  styleUrls: ['./admin-confirm-enroll.component.scss']
})
export class AdminConfirmEnrollComponent implements OnInit {
  icons = { cilCheckAlt,cilX };

  ListCand:Candidature[]=[];
  id!:number
  ids!:number
  cand!:Candidature
  isSending!:boolean
  sent!:boolean
  dataSource = new MatTableDataSource<Candidature>(this.ListCand);
  columnsToDisplay =['showall','preselect','confirm','details','firstname','lastname','confirmed','preselected','confirmationd','receivingInst','sendingInst'];


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('dialogRef', { static: true }) dialogRef!: TemplateRef<any>;

  constructor(private _service:HeiService,private _liveAnnouncer: LiveAnnouncer,private _router:Router,private dialog: MatDialog) { }
  openDialog() {
    let dialog = this.dialog.open(this.dialogRef);
  }

  @Output() newItemEvent = new EventEmitter<number>();

  ConfirmStudent(idCand: number) {
    this._service.getCandidature(idCand).subscribe(e=>{
      this.cand=<Candidature>e;
      this._service.confirmStudent(this.cand).subscribe()
    })
    setTimeout(() => this.reload(), 2500)
  }
  PreselectStudent(idCand: number) {
    this._service.getCandidature(idCand).subscribe(e=>{
      this.cand=<Candidature>e;
      this._service.preselectStudent(this.cand).subscribe()
    })
    setTimeout(() => this.reload(), 2500)
  }
  showStudentsCands(idCand: number) {
    this._service.getCandidature(idCand).subscribe(e=>{
      this.cand=<Candidature>e;
      this._service.getStudentCandidatures(this.cand).subscribe(e=>{
        this.ListCand=e;
      })
    })
  }
reload(){
  this._service.getCandidatures().subscribe(res=>{
    console.log(res);
    this.ListCand=res;
    // this.ListCand.forEach(e=>{
    //   this._service.getStudent(e.student_id).subscribe(s=>{
    //     e.student=s
    //   })
    //   this._service.getSendingInst(e.sendinginstitution_id).subscribe(sinst=>{
    //     e.sendinginstitution=sinst
    //   })
    //   this._service.getReceivingInst(e.receivinginstitution_id).subscribe(rinst=>{
    //     e.receivinginstitution=rinst
    //   })
    // })
    this.dataSource=new MatTableDataSource<Candidature>(this.ListCand);
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  });
}
  ngOnInit(): void {
    this.reload()
  }


  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
