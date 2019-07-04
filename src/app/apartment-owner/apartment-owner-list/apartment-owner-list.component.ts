import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from 'src/app/model/apartment';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';
import { ApartmentOwnerDTO } from 'src/app/model/apartmentOwnerDTO';

@Component({
  selector: 'app-apartment-owner-list',
  templateUrl: './apartment-owner-list.component.html',
  styleUrls: ['./apartment-owner-list.component.css']
})
export class ApartmentOwnerListComponent implements OnInit {

  @Input() apartment: Apartment;

  apartmentOwners: Array<ApartmentOwnerDTO> = [];
  ownerExists: Boolean;

  constructor(private dataService: DataService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.getOwnersForApartment();
  }

  getOwnersForApartment() {
    this.ownerExists = false;
    this.dataService.getOwnersForApartment(this.apartment.Id).subscribe(resp => {
      if(resp.ok) {
        console.log("getOwnersForApartment response received....");
        this.apartmentOwners = new ApartmentOwnerDTO().deserializeList(resp.body);
        if(this.apartmentOwners.length > 0) {
          this.ownerExists = true;
        }
      }
    });
  }

}
