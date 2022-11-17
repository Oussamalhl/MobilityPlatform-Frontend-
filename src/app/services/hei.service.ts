import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hei} from "../models/hei";
import {Candidature} from "../models/candidature";
import {ContactPerson} from "../models/contact-person";
import { map } from 'rxjs/operators';
import {ConfirmationPreselection} from "../models/confirmation-preselection";

@Injectable({
  providedIn: 'root'
})
export class HeiService {
  private heiUrl="https://eche-list.erasmuswithoutpaper.eu/api";

  constructor(private _http:HttpClient) { }

  getHeiList():Observable<Hei[]>{
    return this._http.get<Hei[]>(this.heiUrl);
  }
  addCandidature(candidature:Candidature,id:number){
    return this._http.post("http://localhost:8081/addCand?idcp="+id,candidature);
  }
  getAllContactPerson():Observable<ContactPerson[]>{
    return this._http.get<ContactPerson[]>("http://localhost:8081/showcps");
  }
  getContactPerson(id:number){
    return this._http.get("http://localhost:8081/showcp?id="+id);
  }
  getCandidatures():Observable<Candidature[]>{
    return this._http.get<Candidature[]>("http://localhost:8081/ShowCand");
  }
  getCandidature(id:number){
    return this._http.get("http://localhost:8081/getCand/?id="+id);
  }
  confirmStudent(cp:ConfirmationPreselection){
    return this._http.put("http://localhost:8081/confirmStudent",cp);
  }
  preselectStudent(cp:ConfirmationPreselection){
    return this._http.put("http://localhost:8081/preselectStudent",cp);
  }
  getAllConfirmationsPreselections():Observable<ConfirmationPreselection[]>{
    return this._http.get<ConfirmationPreselection[]>("http://localhost:8081/getcps");
  }
  getConfirmationPreselection(id:number){
    return this._http.get("http://localhost:8081/getconfpres/?id="+id);
  }
  getStudentCandidatures(id:number):Observable<Candidature[]>{
    return this._http.get<Candidature[]>("http://localhost:8081/showstudcand?id="+id);
  }

}
