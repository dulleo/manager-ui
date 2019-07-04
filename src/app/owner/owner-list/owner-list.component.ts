import { Component, OnInit } from '@angular/core';
import { Community } from 'src/app/model/community';
import { Owner } from 'src/app/model/owner';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  selectedCommunity: Community;
  selectedOwner: Owner;
  owners: Array<Owner> = [];
  ownerExists: Boolean = false;
  display='none';

  constructor(private dataService: DataService, 
    private router: Router, 
    private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.selectedCommunity.subscribe(message => this.selectedCommunity = message);
    this.getAllOwners(this.selectedCommunity.Id);
  }

  getAllOwners(communityId:number) {
    this.dataService.getAllOwners(communityId).subscribe(resp => {
      if(resp.ok) {
        console.log("getAllOwners response received....");
        this.owners = new Owner().deserializeList(resp.body);
        if(this.owners.length > 0) {
          this.ownerExists = true;
        } else {
          this.ownerExists = false;
        }
      }
    });
  }

  createOwner() {
    console.log("Create owner is called....");
    this.messageService.selectCommunity(this.selectedCommunity);
    this.messageService.selectOwner(new Owner);
    this.router.navigate(['owners/create-edit']);
  }

  updateOwner(owner: Owner) {
    console.log("Update owner id: " + owner.Id);
    this.messageService.selectOwner(owner);
    this.router.navigate(['owners/create-edit']);
  }

  selectOwner(owner: Owner) {
    this.selectedOwner = owner;
  }

  modalCancel() {
    this.selectedOwner = null;
  }

  deleteOwner() {
    this.dataService.deleteOwner(this.selectedCommunity.Id, this.selectedOwner.Id).subscribe(resp => {
      if(resp.ok) {
          //alert("Test " + this.selectedTestDTO.Name + " is successfully deleted!");
          this.getAllOwners(this.selectedCommunity.Id);
          this.modalCancel();
      }
    });
  }

  back() {
    this.router.navigate(['communities']);
  }

}
