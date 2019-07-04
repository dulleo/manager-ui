import { Component, OnInit } from '@angular/core';
import { Community } from 'src/app/model/community';
import { Doorway } from 'src/app/model/doorway';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-doorway-create-edit',
  templateUrl: './doorway-create-edit.component.html',
  styleUrls: ['./doorway-create-edit.component.css']
})
export class DoorwayCreateEditComponent implements OnInit {

  community: Community;
  doorway: Doorway;
  isEditMode: Boolean;
  submitText: string;

  constructor(private dataService: DataService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.selectedCommunity.subscribe(message => this.community = message);
    this.messageService.selectedDoorway.subscribe(message => this.doorway = message);

    if(this.doorway.Id) {
      this.submitText = "Izmena Ulaza";
      this.isEditMode = true;
      
    } else {
      this.submitText = "Novi Ulaz";
      this.isEditMode = false;
    }
  }

  onSubmit() {
    if(this.isEditMode) {
      console.log("Update doorway id: " + this.doorway.Id);
      this.dataService.updateDoorway(this.community.Id, this.doorway).subscribe(resp => {
        if(resp.ok) {
          this.router.navigate(['doorways']);
        }
      });
    } else {
      console.log("Create doorway...");
      this.dataService.createDoorway(this.community.Id, this.doorway).subscribe(resp => {
        if(resp.ok) {
          this.router.navigate(['doorways']);
        }
      });
    }
  }

  back() {
    this.router.navigate(['doorways']);
  }

}
