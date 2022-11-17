import {Component, OnInit, ViewChild} from '@angular/core';
import {Hei} from "../../../models/hei";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {HeiService} from "../../../services/hei.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
  selector: 'app-admin-list-inst',
  templateUrl: './admin-list-inst.component.html',
  styleUrls: ['./admin-list-inst.component.css']
})
export class AdminListInstComponent implements OnInit {
  ListHei:Hei[]=[];
  dataSource = new MatTableDataSource<Hei>(this.ListHei);
  columnsToDisplay =['enrollHei','proposalNumber','erasmusCode','pic','oid','organisationLegalName','street','postalCode','city','country','webpage'];

  constructor(private _service:HeiService,private _liveAnnouncer: LiveAnnouncer) { }
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this._service.getHeiList().subscribe(res=>{
      console.log(res);
      this.ListHei=res;
      this.dataSource=new MatTableDataSource<Hei>(this.ListHei);
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
