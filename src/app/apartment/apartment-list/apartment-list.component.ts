import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Community } from 'src/app/model/community';
import { Doorway } from 'src/app/model/doorway';
import { Apartment } from 'src/app/model/apartment';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {

  selectedCommunity: Community;
  selectedDoorway: Doorway;
  selectedApartment: Apartment = new Apartment;
  apartments: Array<Apartment> = [];
  apartmentExists: Boolean = false;

  constructor(private dataService: DataService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.selectedCommunity.subscribe(message => this.selectedCommunity = message);
    this.messageService.selectedDoorway.subscribe(message => this.selectedDoorway = message);
    this.getAllApartments();
  }

  getAllApartments() {
   this.dataService.getAllApartments(this.selectedCommunity.Id, this.selectedDoorway.Id).subscribe(resp => {
      if(resp.ok) {
        console.log("getAllApartments response received....");
        this.apartments = new Apartment().deserializeList(resp.body);
        if(this.apartments.length > 0) {
          this.apartmentExists = true;
        } else {
          this.apartmentExists = false;
        }
      }
    });
  }

  back() {
      this.router.navigate(['doorways']);
  }

  onSubmit() {
    console.log("Create apartment...");
      this.dataService.createApartment(this.selectedCommunity.Id, this.selectedDoorway.Id, this.selectedApartment).subscribe(resp => {
        if(resp.ok) {
          this.getAllApartments();
        }
      });
  }

}
