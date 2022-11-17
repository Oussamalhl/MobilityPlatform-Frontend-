import {Component, OnInit, ViewChild} from '@angular/core';
import {Candidature} from "../../../models/candidature";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {HeiService} from "../../../services/hei.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
  selector: 'app-admin-show-enrollment',
  templateUrl: './admin-show-enrollment.component.html',
  styleUrls: ['./admin-show-enrollment.component.scss']
})
export class AdminShowEnrollmentComponent implements OnInit {

  ListCand:Candidature[]=[];
  dataSource = new MatTableDataSource<Candidature>(this.ListCand);
  columnsToDisplay =['details','student','sendinginstitution','receivinginstitution'];


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _service:HeiService,private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this._service.getCandidatures().subscribe(res=>{
      console.log(res);
      this.ListCand=res;
      this.dataSource=new MatTableDataSource<Candidature>(this.ListCand);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    });
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
