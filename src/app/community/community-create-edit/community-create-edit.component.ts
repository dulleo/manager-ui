import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Community } from 'src/app/model/community';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-community-create-edit',
  templateUrl: './community-create-edit.component.html',
  styleUrls: ['./community-create-edit.component.css']
})
export class CommunityCreateEditComponent implements OnInit {

  community: Community;
  isEditMode: Boolean;
  submitText: string;

  constructor(private dataService: DataService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.selectedCommunity.subscribe(message => this.community = message);
    
    if(this.community.Id) {
      this.submitText = "Izmena Stambene Zajednice";
      this.isEditMode = true;
      
    } else {
      this.submitText = "Nova Stambena Zajednica";
      this.isEditMode = false;
    }
  }

  onSubmit() {
    if(this.isEditMode) {
      console.log("Edit community id: " + this.community.Id);
      this.dataService.updateCommunity(this.community).subscribe(resp => {
        if(resp.ok) {
          this.router.navigate(['communities']);
        }
      });
    } else {
      console.log("Create community...");
      this.dataService.createCommunity(this.community).subscribe(resp => {
        if(resp.ok) {
          this.router.navigate(['communities']);
        }
      });
    }
  }


}
