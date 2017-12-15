import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import{Observable, Subject}  from 'rxjs'


@Injectable()
export class TrackingSearchService {

  trackings=[]

  trackingsStream = new Subject();

//W konstruktorze wstrzykuję usługe http
  constructor(private http:Http) {

    
   }
  
getTrackingsStream(){

  return Observable.from(this.trackingsStream)
}

search(query){
 
let url=`http://localhost:3000/list?id=${query}`
this.http.get(url).subscribe((response:Response)=>{
let data=response.json();
let trackings=data;
this.trackings=trackings
this.trackingsStream.next(this.trackings)


})


}

}
