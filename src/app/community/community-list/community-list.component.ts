import { Component, OnInit } from '@angular/core';
import { Community } from 'src/app/model/community';
import { DataService } from 'src/app/service/data.service';
import { Router } from "@angular/router";
import { MessageService } from 'src/app/service/message.service';


@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.css']
})
export class CommunityListComponent implements OnInit {

  communities: Array<Community>;
  communityExists: Boolean = false;
  selectedCommunity: Community;
  
  constructor(private dataService: DataService, private router: Router, private messageService : MessageService) { }

  ngOnInit() {
    this.getAllCommunities();
  }

  getAllCommunities() {
    this.dataService.getAllCommunities().subscribe(resp => {
      if(resp.ok) {
        console.log("getAllCommunities reposnse received....");
        this.communities = new Community().deserializeList(resp.body);
        if(this.communities.length > 0) {
          this.communityExists = true;
        } else {
          this.communityExists = false;
        }
      }
    })
  }

  createCommunity() {
    console.log("Create community is called!");
    this.messageService.selectCommunity(new Community);
    this.router.navigate(['communities/create-edit']);
  }

  updateCommunity(community: Community) {
    console.log("Update community is called....");
    this.messageService.selectCommunity(community);
    this.router.navigate(['communities/create-edit']);
  }

  selectCommunity(community: Community) {
    this.selectedCommunity = community;
  }

  modalCancel() {
    this.selectedCommunity = null;
  }
  

  deleteCommunity() {
    this.dataService.deleteCommunity(this.selectedCommunity.Id).subscribe(resp => {
        if(resp.ok) {
            //alert("Test " + this.selectedTestDTO.Name + " is successfully deleted!");
            this.getAllCommunities();
            this.modalCancel();
        }
      });
  }

  getBankAccounts(community: Community) {
    console.log("Get accounts is called....");
    this.messageService.selectCommunity(community);
    this.router.navigate(['accounts']);
  }

  getDoorways(community: Community) {
    console.log("Get doorways is called....");
    this.messageService.selectCommunity(community);
    this.router.navigate(['doorways']);
  }

  getOwners(community: Community) {
    console.log("Get owners is called....");
    this.messageService.selectCommunity(community);
    this.router.navigate(['owners']);
  }

}
