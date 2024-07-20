import {Component, OnInit, ViewChild} from '@angular/core';
import {Hei} from "../../../models/hei";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {HeiService} from "../../../services/hei.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {mobility} from "../../../models/mobility";

@Component({
  selector: 'app-admin-list-inst',
  templateUrl: './admin-list-inst.component.html',
  styleUrls: ['./admin-list-inst.component.css']
})
export class AdminListInstComponent implements OnInit {
  ListHei:Hei[]=[];
  selectedProposal!:string
  selectedMobility!:Hei
  mobilityList:mobility[]=[
    new mobility("101007499","A DORNBIR01","FACHHOCHSCHULE VORARLBERG GMBH","Baden","Austria",4),
    new mobility("101013276","B DIEPENB07","Transnationale Universiteit Limburg","Maastricht","Netherlands",4),
    new mobility("101013322","F AIX-PRO27","Travaux Publics CFA PACA","MALLEMORT","France",5),
    new mobility("101012930","F PARIS468","SORBONNE UNIVERSITE","Paris","France",5)
  ]
  dataSource = new MatTableDataSource<Hei>(this.ListHei);
  displayedColumns =['enrollHei','proposalNumber','erasmusCode','pic','oid','organisationLegalName','street','postalCode','city','country','webpage'];

  constructor(private _service:HeiService,private _liveAnnouncer: LiveAnnouncer) { }
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    console.log(this.mobilityList);
    this._service.getHeiList().subscribe(res=>{
      //console.log(res);
      this.ListHei=res;
      this.dataSource=new MatTableDataSource<Hei>(this.ListHei);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    });
  }
findMobility(proposalNumber:string){
  console.log("mobilityList: "+this.mobilityList)

  console.log("Selected Mobility proposal: "+proposalNumber)

  this.ListHei.find(e=>e.proposalNumber==proposalNumber?this.selectedMobility=e:null)
  this.selectedMobility.mobility=true
  this.mobilityList.find(e=>e.proposalNumber==proposalNumber?this.selectedMobility.rcp=e.rcontactPerson:null)
  console.log("this Selected Mobility proposal: "+this.selectedMobility.proposalNumber)

  this.ListHei=[]
  this.ListHei.push(this.selectedMobility)
  console.log("ListHei"+this.ListHei)
  this.dataSource=new MatTableDataSource<Hei>(this.ListHei)
  this.dataSource.sort=this.sort
  this.dataSource.paginator=this.paginator
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
