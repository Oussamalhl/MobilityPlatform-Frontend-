import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hei} from "../models/hei";
import {Candidature} from "../models/candidature";
import {ContactPerson} from "../models/contact-person";
import { map } from 'rxjs/operators';
import {Student} from "../models/student";
import {SendingInstitution} from "../models/sending-institution";
import {ReceivingInstitution} from "../models/receiving-institution";

@Injectable({
  providedIn: 'root'
})
export class HeiService {
  private heiUrl="https://eche-list.erasmuswithoutpaper.eu/api";

  constructor(private _http:HttpClient) { }
  getStudent(id:number){
    return this._http.get<Student>("http://localhost:8081/ShowStud?id="+id);
  }
  getHeiList():Observable<Hei[]>{
    return this._http.get<Hei[]>(this.heiUrl);
  }
  getReceivingInst(id:number){
    return this._http.get<ReceivingInstitution>("http://localhost:8081/getReceivInst?id="+id);
  }
  getSendingInst(id:number){
    return this._http.get<SendingInstitution>("http://localhost:8081/getSendInst?id="+id);
  }
  addCandidature(candidature:Candidature){
    return this._http.post("http://localhost:8081/addCand",candidature);
  }
  affectSContactPerson(idCand:number,idSCP:number){
    return this._http.post("http://localhost:8081/affSCP?idCand="+idCand+"&idSCP="+idSCP, {observe: 'response'});
  }
  getAllContactPerson():Observable<ContactPerson[]>{
    return this._http.get<ContactPerson[]>("http://localhost:8081/showcps");
  }
  getContactPerson(id:number){
    return this._http.get<ContactPerson>("http://localhost:8081/showcp?id="+id);
  }
  getCandidatures():Observable<Candidature[]>{
    return this._http.get<Candidature[]>("http://localhost:8081/ShowCand");
  }
  getCandidature(id:number):Observable<Candidature>{
    return this._http.get<Candidature>("http://localhost:8081/getCand/?id="+id);
  }
  confirmStudent(c:Candidature){
    return this._http.post("http://localhost:8081/confCand",c);
  }
  preselectStudent(c:Candidature){
    return this._http.post("http://localhost:8081/presCand",c);
  }
  removeConfirmation(c:Candidature){
    return this._http.post("http://localhost:8081/reConfCand",c);
  }
  removeSelection(c:Candidature){
    return this._http.post("http://localhost:8081/rePresCand",c);
  }
  getStudentCandidatures(c:Candidature):Observable<Candidature[]>{
    return this._http.post<Candidature[]>("http://localhost:8081/studCands",c);
  }

}
