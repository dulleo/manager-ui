import { Component, OnInit } from '@angular/core';
import { Community } from 'src/app/model/community';
import { Owner } from 'src/app/model/owner';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-owner-create-edit',
  templateUrl: './owner-create-edit.component.html',
  styleUrls: ['./owner-create-edit.component.css']
})
export class OwnerCreateEditComponent implements OnInit {

  community: Community;
  owner: Owner;
  isEditMode: Boolean;
  submitText: string;

  constructor(private dataService: DataService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.selectedCommunity.subscribe(message => this.community = message);
    this.messageService.selectedOwner.subscribe(message => this.owner = message);

    if(this.owner.Id) {
      this.submitText = "Izmena Vlasnika";
      this.isEditMode = true;
      
    } else {
      this.submitText = "Novi Vlasnik";
      this.isEditMode = false;
    }
  }

  onSubmit() {
    if(this.isEditMode) {
      console.log("Edit owner id: " + this.owner.Id);
      this.dataService.updateOwner(this.community.Id, this.owner).subscribe(resp => {
        if(resp.ok) {
          this.router.navigate(['owners']);
        }
      });
    } else {
      console.log("Create account...");
      this.dataService.createOwner(this.community.Id, this.owner).subscribe(resp => {
        if(resp.ok) {
          this.router.navigate(['owners']);
        }
      });
    }
  }

  back() {
    this.router.navigate(['owners']);
  }

}
