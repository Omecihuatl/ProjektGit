import { Component, OnInit } from '@angular/core';
import {TrackingSearchService} from '../tracking-search.service';//importuje serwis


@Component({
  selector: 'app-package-status',
  templateUrl: './package-status.component.html',
  styleUrls: ['./package-status.component.css']
})
export class PackageStatusComponent implements OnInit {

  trackings;
  
  //Wstrzykuje usługę w konstruktorze:
  constructor(private trackingSearch:TrackingSearchService) { }


//gdy komponent juz zostanie umieszczony w aplikacji, czyli OnInit, to pobieram lsite albumów
  ngOnInit() {
   
    this.trackingSearch.getTrackingsStream().subscribe((trackings)=>{
    this.trackings=trackings;


})
 this.trackingSearch.search('')//Dałem domyślnie puste, żeby bo odświeżeniu strony, 
                               //id nie zostało na stronie
  }
 
 search(query){

   this.trackingSearch.search(query)
 }
}
