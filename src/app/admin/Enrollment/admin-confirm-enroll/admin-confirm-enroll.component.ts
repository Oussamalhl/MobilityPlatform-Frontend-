import {Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {Candidature} from "../../../models/candidature";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {HeiService} from "../../../services/hei.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {ConfirmationPreselection} from "../../../models/confirmation-preselection";
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

  ListCP:ConfirmationPreselection[]=[];
  ListCand:Candidature[]=[];
  id!:number
  ids!:number
  idcp!:number
  isSending!:boolean
  sent!:boolean
  cp!:ConfirmationPreselection
  dataSource = new MatTableDataSource<ConfirmationPreselection>(this.ListCP);
  columnsToDisplay =['showall','preselect','confirm','details','firstname','lastname','confirmed','preselected','preselectectiond','confirmationd'];


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('dialogRef', { static: true }) dialogRef!: TemplateRef<any>;

  constructor(private _service:HeiService,private _liveAnnouncer: LiveAnnouncer,private _router:Router,private dialog: MatDialog) { }
  openDialog() {
    let dialog = this.dialog.open(this.dialogRef);
  }
  @Output() newItemEvent = new EventEmitter<number>();
  ConfirmStudent(value: string) {
    this.idcp=Number(value);
    this._service.getConfirmationPreselection(this.idcp).subscribe((data=>{
      this.cp=<ConfirmationPreselection>data;
      this._service.confirmStudent(this.cp).subscribe()
    }))
    //this._router.navigateByUrl("admin/showconfpres");
    //location.reload();
    setTimeout(() => this.reload(), 2500)
  }
  PreselectStudent(value: string) {
    this.idcp=Number(value);
    this._service.getConfirmationPreselection(this.idcp).subscribe((data=>{
      this.cp=<ConfirmationPreselection>data;
      this._service.preselectStudent(this.cp).subscribe();
    }))
    //this._router.navigateByUrl("admin/showconfpres");
    //location.reload();
    setTimeout(() => this.reload(), 2500)
  }
  showStudentsCands(value: string) {
    this.ids=Number(value);
    this._service.getStudentCandidatures(this.ids).subscribe((data=>{
      this.ListCand=<Candidature[]>data;
    }))
    //this._router.navigateByUrl("admin/showconfpres");
  }
reload(){
  this._service.getAllConfirmationsPreselections().subscribe(res=>{
    console.log(res);
    this.ListCP=res;
    this.dataSource=new MatTableDataSource<ConfirmationPreselection>(this.ListCP);
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
