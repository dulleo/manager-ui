import { Component, OnInit } from '@angular/core';
import { Community } from 'src/app/model/community';
import { Doorway } from 'src/app/model/doorway';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-doorway-list',
  templateUrl: './doorway-list.component.html',
  styleUrls: ['./doorway-list.component.css']
})
export class DoorwayListComponent implements OnInit {

  selectedCommunity: Community;
  selectedDoorway: Doorway;
  doorways: Array<Doorway> = [];
  doorwayExists: Boolean = false;

  constructor(private dataService: DataService, 
    private router: Router, 
    private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.selectedCommunity.subscribe(message => this.selectedCommunity = message);
    this.getAllDoorways(this.selectedCommunity.Id);
  }

  getAllDoorways(communityId:number) {
    this.dataService.getAllDoorways(communityId).subscribe(resp => {
      if(resp.ok) {
        console.log("getAllDoorways response received....");
        this.doorways = new Doorway().deserializeList(resp.body);
        if(this.doorways.length > 0) {
          this.doorwayExists = true;
        } else {
          this.doorwayExists = false;
        }
      }
    });
  }

  createDoorway() {
    console.log("Create doorway is called....");
    this.messageService.selectCommunity(this.selectedCommunity);
    this.messageService.selectDoorway(new Doorway);
    this.router.navigate(['doorways/create-edit']);
  }

  updateDoorway(doorway: Doorway) {
    console.log("Update doorway id: " + doorway.Id);
    this.messageService.selectDoorway(doorway);
    this.router.navigate(['doorways/create-edit']);
  }

  selectDoorway(doorway: Doorway) {
    this.selectedDoorway = doorway;
  }

  modalCancel() {
    this.selectedDoorway = null;
  }

  deleteDoorway() {
    this.dataService.deleteDoorway(this.selectedCommunity.Id, this.selectedDoorway.Id).subscribe(resp => {
        if(resp.ok) {
            //alert("Test " + this.selectedTestDTO.Name + " is successfully deleted!");
            this.getAllDoorways(this.selectedCommunity.Id);
            this.modalCancel();
        }
      });
  }

  getApartmans(doorway: Doorway) {
    this.messageService.selectDoorway(doorway);
    this.messageService.selectCommunity(this.selectedCommunity);  //TODO: Do we need this info in the apartment controller?????
    this.router.navigate(['apartments']);
  }

  back() {
    this.router.navigate(['communities']);
  }

}
